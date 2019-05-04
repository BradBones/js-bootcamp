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

// .find method
const findNote = function (arr, searchTerm) {
    return arr.find(function (individualNote, i) {
        return individualNote.title.toLowerCase() === searchTerm.toLowerCase();
    });
};

// Filter method - creates a new array without mutating the original
const findNotes = function (arr, searchTerm) {
    return arr.filter(function (arrItem) {
        const isTitleMatch = arrItem.title.toLowerCase().includes(searchTerm.toLowerCase());
        const isBodyMatch = arrItem.body.toLowerCase().includes(searchTerm.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
}

console.log(findNotes(notes, 'eat'));


// // .findIndex method
// const findNote = function (arr, searchTerm) {
//     const index = arr.findIndex(function (individualNote, i) {
//         return individualNote.title.toLowerCase() === searchTerm.toLowerCase();
//     });
//     return arr[index];
// };

const noteFound = findNote(notes, 'lifestyle improvments');
//console.log(noteFound);




// // findIndex method
// const index = notes.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'Lifestyle improvments';
// });

// console.log(index);