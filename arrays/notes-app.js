const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Lifestyle improvments',
    body: 'Excercise more. Eat less meat.'
}, {
    title: 'Office modification',
    body: 'Get a new chair.'
}]

// findIndex method
const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === 'Lifestyle improvments';
});

console.log(index);