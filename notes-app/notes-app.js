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
    console.log(e.target.value);
});