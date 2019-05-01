let myAccount = {
    name: 'Jen Smith',
    expences: 0,
    income: 0,
    balance: 0
}

let addExpense = function (account, amount) {
    account.expences = account.expences + amount;
}

// addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount;
}

// resetAccount
let resetAccount = function (account) {
    account.expences = 0;
    account.income = 0;
}

// getAccountSummary
// Account for Jen has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function(account) {
    account.balance = account.income - account.expences;
    return `Account for ${account.name} has a balance of: $${account.balance} --- Income = $${account.income} | Expences = $${account.expences}`;
}




// FUNCTION CALLS TO TEST
addIncome(myAccount, 1000);
addExpense(myAccount, 100);
addExpense(myAccount, 200);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));






