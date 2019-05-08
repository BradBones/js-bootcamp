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

// You have -- todos left (p element)

// Filter completed todos and return the objects in a new array
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
});

// Creating a p element to display the number of pending todos in the DOM
const summary = document.createElement('h3');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('body').appendChild(summary);


// Add a p for each todo above (use text value)
todos.forEach(element => {
    const showPendingTodos = document.createElement('p');
    showPendingTodos.textContent = element.todo;
    document.querySelector('body').appendChild(showPendingTodos);
});

// Listen for new todo creation
document.querySelector('button').addEventListener('click', function (e){
    console.log('button clicked')
});










// const p = document.querySelectorAll('p');

// p.forEach(paragraph => {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove();
//     }
// });


