const notes = ['Note 1', 'Note 2', 'Note 3'];

// // Removes the last item in an array - Returns removed item
// console.log(`${notes.pop()} is removed with .pop`);

// // Add something to the end of an array
// notes.push('Pushed Note');

// // Shift method removes the first item in an array and returns it
// console.log(`.shift removes ${notes.shift()}`);

// // Unshift method adds an item to the deginin of an array
// notes.unshift('First Item');

// Splice method - Two arguments, a = index, b = num of items to be removed
notes.splice(1, 1);
// Another use case...
// Use 0 as the 2nd argument to remove nothing and use a 3rd argument to add something new at that index.
notes.splice(1, 0, 'Something new');
// Another use case...
// Remove and item with the 2nd argument and then add something in it's place
notes.splice(2, 1, 'replaced item');

notes[0] = 'another replaced item';

// forEach method takes one argument (which is itself a function)
notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

console.log(notes.length);
console.log(notes);

for (let i = 0; i <= 2; i++ ) {
    console.log(i);
}

// Counting backwards with a for loop
for (let count = notes.length -1; count >= 0; count--) {
    console.log(notes[count]);
}