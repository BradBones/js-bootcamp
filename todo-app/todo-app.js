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
    searchText: ''
};


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (item) {
        return item.todo.toLowerCase().includes(filters.searchText.toLowerCase());
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


// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e){
    console.log('button clicked')
});

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});


