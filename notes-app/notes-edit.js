const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeBtn = document.querySelector('#remove-note');

// returns the id string without the url hashtag (entire string starting at index 1)
const noteID = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function (note) {
    return note.id === noteID;
});

// If the id is invalid, retun user to home page
if (note === undefined) {
    location.assign('/index.html');
};

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value;
    saveNotes();
});

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value;
    saveNotes();
});

removeBtn.addEventListener('click', function (e) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html')
});
