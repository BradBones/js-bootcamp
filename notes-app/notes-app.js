const notes = getSavedNotes();

const filters = {
    searchText: ''
};

renderNotes(notes, filters);


// Button handlers
document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    });
    saveNotes(notes);
    renderNotes(notes, filters);
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