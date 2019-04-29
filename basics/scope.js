// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (var four)
    // Local Scope (varThree)

let varOne = 'var one';

if (true) {
    console.log(varOne);
    let varTwo = 'var two';
    console.log(varTwo);

    if (true) {
        let varFour = 'var four';
    }
}

if (true) {
    let varThree = 'var three';
}

console.log(varTwo);