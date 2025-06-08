
function showTime() {
document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
showTime();
}, 1000);

// Array to store expenses
const expenses = [];

const addButton = document.querySelector('button');
addButton.addEventListener('click', addExpense);

function addExpense() {
    const desc = document.getElementById('descInput').value.trim();
    const amount = parseFloat(document.getElementById('amountInput').value);

    if (desc === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid description and amount.');
        return;
    }

    expenses.push({ description: desc, amount: amount });

    // Clear inputs
    document.getElementById('descInput').value = '';
    document.getElementById('amountInput').value = '';

    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    const totalAmountEl = document.getElementById('totalAmount');
    expenseList.innerHTML = '';

    let total = 0;

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.description} -
$${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);

        total += expense.amount;
    });

    totalAmountEl.textContent = total.toFixed(2);
}
