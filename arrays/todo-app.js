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

// 1. Convert array to array of objects -> text, completed property: true/false
// 2. Function to remove a todo by text value

const deleteTodo = function (list, searchRequest) {
    const toBeDeleted = list.findIndex(function (searchedItem, i) {
        return searchedItem.todo.toLowerCase() === searchRequest.toLowerCase();
    });
    if (toBeDeleted > -1) {
        todos.splice(toBeDeleted, 1)
    }
    
}

console.log(todos);
deleteTodo(todos, 'cut Claire\'s hair');
console.log(todos);
// console.log(`Pre splice | ${todos.todo}`);

// console.log(`Post splice | ${todos.todo}`);



