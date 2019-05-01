let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSumary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);


// Challenge area

// Create function - take F in - return an object with all three

let tempCalc = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: (fahrenheit + 459.67) / 1.8
    }
}

let tempF = tempCalc(32);

console.log(`${tempF.fahrenheit} degrees F is ${tempF.celsius} degrees C and ${tempF.kelvin} degrees K`);


