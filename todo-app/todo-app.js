let todos = getsavedTodos();

const filters = {
    searchText: '',
    hideBoxChecked: false
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
    saveTodos();
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
});

// Hide compleated checkbox feature
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    //console.log(e.target.checked)
    filters.hideBoxChecked = e.target.checked
    renderTodos(todos, filters)     
});

