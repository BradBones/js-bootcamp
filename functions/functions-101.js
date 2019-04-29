// Function - input (argumant), code, output (return value)

//Funtion definition
let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();

let square = function(num) {
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);


// Challenge area

// convertFahrenheitToCelsius
// Call a couple of times (32 -> 0) (68 -> 20)
// Print the values

let convertFahrenheitToCelsius = function (fTemp) {
    let cTemp = (fTemp - 32) / 1.8;
    return cTemp;
}

let celsius1 = convertFahrenheitToCelsius(32);
let celsius2 = convertFahrenheitToCelsius(68);

console.log(celsius1);
console.log(celsius2);
