// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)


let convertFahrenheitToCelsius = function (fTemp) {
    let cTemp = (fTemp - 32) / 1.8;

    if (cTemp <= 0) {
        let isFreezing = true;
    }

    return cTemp;
}

let celsius1 = convertFahrenheitToCelsius(32);
let celsius2 = convertFahrenheitToCelsius(68);

console.log(celsius1);
console.log(celsius2);