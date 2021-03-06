const notes = getSavedNotes();

const filters = {
    searchText: ''
};

renderNotes(notes, filters);


// Button handlers
document.querySelector('#create-note').addEventListener('click', function (e) {
    const assignID = uuidv4()
    notes.push({
        // ID generated by uuid-plugin.js
        id: assignID,
        title: '',
        body: ''
    });
    
    saveNotes(notes);
    // send user directly to the editing page
    location.assign(`/edit.html#${assignID}`);
});


// Search input field
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

// Filter search by parameter
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})