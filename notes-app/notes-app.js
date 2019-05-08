const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Lifestyle improvments',
    body: 'Excercise more. Eat less meat.'
}, {
    title: 'Office modification',
    body: 'Get a new chair.'
}];

const filters = {
    searchText: ''
};

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLocaleLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
};

renderNotes(notes, filters);

// Button handlers
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked';
});

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.notes').forEach(function (note) {
        note.remove();
    });
});

// Search input field
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});