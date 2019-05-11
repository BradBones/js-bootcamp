// Get todos from local storage
const getsavedTodos = function (todos) {
    // Check for existing saved data
    const todosJSON = localStorage.getItem('todos');
    // Check if any data is in local storage
    if (todosJSON !== null) {
        // convert string to an object
        return JSON.parse(todosJSON);
    } else {
        return [];
    };
}; 

// Save new todos to local storage
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (item) {
        const searchTextMatch = item.todo.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideBoxChecked || !item.completed;

        return searchTextMatch && hideCompleteMatch;
    });

    // Filter completed todos and return the objects in a new array
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    // Clear the div after calculating things and before rendering things.
    document.querySelector('#todos').innerHTML = '';
    // Creating a p element to display the number of pending todos in the DOM
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    // Add a p for each todo above (use text value)
    filteredTodos.forEach(element => {
        document.querySelector('#todos').appendChild(generateTodoDOM(element));
    });
};

// Get the DOM elements for an individual note
const generateTodoDOM = function (element) {
    const showPendingTodos = document.createElement('p');
    showPendingTodos.textContent = element.todo;
    return showPendingTodos;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    document.querySelector('#todos').appendChild(summary);
    return summary;
};