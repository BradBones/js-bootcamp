const todos = [{
    todo: 'Walk the dog', 
    completed: false
}, {
    todo: 'go to the gym',
    completed: true
}, {
    todo: 'cut Claire\'s hair',
    completed: false
}, {
    todo: 'shoot a video',
    completed: true
}, {
    todo: 'pick up cake',
    completed: true
}];


const deleteTodo = function (list, searchRequest) {
    const toBeDeleted = list.findIndex(function (searchedItem) {
        return searchedItem.todo.toLowerCase() === searchRequest.toLowerCase();
    });
    if (toBeDeleted > -1) {
        todos.splice(toBeDeleted, 1)
    }
    
}

// console.log(todos);
// deleteTodo(todos, 'cut Claire\'s hair');
// console.log(todos);

const getThingsTodo = function (arr) {
    return arr.filter(function (arrItem) {
        return !arrItem.completed;
    }); 
}





console.log(getThingsTodo(todos));



