const todos = ['Walk the dog', 'go to the gym', 'cut Claire\'s hair', 'shoot a video', 'pick up cake'];

// delete 3rd item
todos.splice(2, 1);
// add new item to the end
todos.push('cut Jen\'s hair');
// remove the first item from the list
todos.shift();


console.log(`You have ${todos.length} todos.`);
console.log(todos);

// 1. first item
// 2. second item
// ...

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

// For loop 
for (let i = 0; i < todos.length; i++) {
    const num = i + 1;
    const todo = todos[i];
    console.log(`For loop | ${num}. ${todos[i]}`);
}

// Reverse loop
for (let i = todos.length -1; i >= 0; i--) {
    const num = i + 1;
    const todo = todos[i];
    console.log(`Reverse loop | ${num}. ${todos[i]}`);
}


// MY CHALLENGE
// Nums running forwards while list runs in reverse

// Create a new empty array to store the reversed list
let todoReverse = [];

// Use a for loop to reverse the order of items in the original array
// NOTE: When the items are fed into a new array in reverse they will be given a new index number [0, 1, 2, 3 ...]
for (let i = todos.length -1; i >= 0; i--) {
    todoReverse.push(todos[i]);
}

// Call .forEach on the new array and print the new index of each item
todoReverse.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})
