// Multipul arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = '-----', score = 0) {
    return `Name: ${name} | Score: ${score}`
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area

// total, tipPercent .15 default

let tipCalculator = function (total, tipPercent = .15) {
    let tip = total * tipPercent;
    console.log(`Tip Amount: $${tip}`);
    return total + tip;
}

let totalTip = tipCalculator(38.40, .18);
console.log(`Total with tip: $${totalTip}`);