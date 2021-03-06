// Read exisiting notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    };
};

// Save notes to local storage
const saveNotes = function () {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (item) {
        return item.id === id
    });

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    };
};


// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a'); // Use span as it's an inline element. p isn't
    const button = document.createElement('button');

    //Setup the remove note button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', function () {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    //setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Untitled note';
    };
    textEl.setAttribute('href', `/edit.html#${note.id}`);
    noteEl.appendChild(textEl);

    return noteEl;
};


// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    });
};