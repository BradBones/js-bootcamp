let name //undefined

name = 'Jen'; //value defined

if (name === undefined) {
    console.log('Please provide a name');
} else {
    console.log(name);
}

// Underfined for funtion arguments
// Undefined as the function return default value
let square = function (num) {
    console.log(num);
}

let result = square();
console.log(result)


// Null as assigned value - Undefined is a value given by the computer / null is a way for the developer to clear a value manually.
let age = 27;

age = null;

console.log(age);