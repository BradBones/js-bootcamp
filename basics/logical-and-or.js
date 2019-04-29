//  && Logical And Operator - True if both sides are true, otherwise false.
// || Logical Or Operator - True if at least one side is true, otherwise false.

let temp = 65;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out');
} else if (temp < 0 || temp > 120) {
    console.log('Stay inside');
} else {
    console.log('Not perfect weather, but ok.')
};

// Challenge area

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan options
// Else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer some vegan dishes')
} else {
    console.log('offer anything from the menu')
};

