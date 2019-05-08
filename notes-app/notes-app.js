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

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked';
});