let num = 103.941;

// To fixed method - limiting decimalplaces, for example limiting to 2 for currencies
console.log(num.toFixed(2));

// Math methods - .round, .floor, .ceil
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Math.random method
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


// Challenge area
// 1 - 5 - true if correct, false if not correct
let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (guess === randomNum) {
        return `You guessed correctly! ${guess} | ${randomNum}`;
    } else {
        return `You guessed: ${guess} | The number is actually: ${randomNum}`;
    };

}

console.log(makeGuess(1));