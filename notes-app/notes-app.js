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


// DOM - Document Object Model

// // Query and remove
// const p = document.querySelector('p');
// p.remove();

// Query all and remove - querySelectorAll returns an array
const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
    p.textContent = '*******';
    //console.log(p.textContent);
    //p.remove();
});

// Add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JS';
document.querySelector('body').appendChild(newParagraph);