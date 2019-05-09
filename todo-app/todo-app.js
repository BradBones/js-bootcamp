const todos = [{
    todo: 'Walk the dog', 
    completed: false
}, {
    todo: 'go to the gym',
    completed: true
}, {
    todo: 'cut Claire\'s hair',
    completed: true
}, {
    todo: 'shoot a video',
    completed: true
}, {
    todo: 'pick up cake',
    completed: false
}];


const filters = {
    searchText: '',
    hideBoxChecked: false
};


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (item) {
        const searchTextMatch = item.todo.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideBoxChecked || !item.completed;

        return searchTextMatch && hideCompleteMatch;
    })



    // Filter completed todos and return the objects in a new array
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    // Clear the div after calculating things and before rendering things.
    document.querySelector('#todos').innerHTML = '';

    // Creating a p element to display the number of pending todos in the DOM
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    document.querySelector('#todos').appendChild(summary);


    // Add a p for each todo above (use text value)
    filteredTodos.forEach(element => {
        const showPendingTodos = document.createElement('p');
        showPendingTodos.textContent = element.todo;
        document.querySelector('#todos').appendChild(showPendingTodos);
    });
};

renderTodos(todos, filters);




// Search feature event handler
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

// Add todo feature event handler
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    //console.log(e.target.elements.newTodo.value);
    todos.push({
        // get newTodo value from html field name=""
        todo: e.target.elements.newTodo.value,
        completed: false
    })
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
});


// Hide compleated checkbox feature
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    //console.log(e.target.checked)
    filters.hideBoxChecked = e.target.checked
    renderTodos(todos, filters)     
});

