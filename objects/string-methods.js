let name = '  Jen Smith ';

// Length property
console.log(name.length);

// Convert to upper case method
console.log(name.toUpperCase());

// Convert to lower case method
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));

// Trim method - removes white space from before and after the string
console.log(name.trim());


// Challenge area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (pass) {
    // This is the same as an if statment, but only default resolves to true/false
    return pass.length > 8 && !pass.includes('password');
}


console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@hfjdks'));
console.log(isValidPassword('asdfpdjkhfdkpassword84598934'));
