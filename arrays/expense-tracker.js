const account = {
    name: 'Jen Smith',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;    
        });
        
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount;
        });

        accountBalance = totalIncome - totalExpenses;

        return `Income: $${totalIncome} | Expenses: $${totalExpenses} | ${this.name} has a balance of: $${accountBalance}`;
    }


}


// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> print Jen smith has $--- in expenses.

// PART 2
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweek getAccountSummary

// Jen Smith has a balance of $10. $100 income. $90 in expenses.



// Expenses
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addExpense('Clothing', 150);
account.addExpense('Haircut', 120);

// Income
account.addIncome('Job', 5000);

// Account Summary
console.log(account.getAccountSummary())






// console.log(account.getAccountSummary(`${account.name} has $${total} in expenses.`));