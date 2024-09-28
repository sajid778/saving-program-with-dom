// get value function

function getInputValueById(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
    
}

// show function error

function showError(id) {
  return document.getElementById(id).classList.remove('hidden')
}

// tofixed

function formCurrency(amount) {
    return `${amount.toFixed(2)}`;
}

// history item
function addToHistory(income, totalExpense, balance) {
    const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

historyItem.innerHTML =`
<p class="text-xs text-gray-500">Serial: ${count}</p>
<p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
<p class="text-xs text-gray-500">income: ${formCurrency(income)}</p>
<p class="text-xs text-gray-500">Expenses: ${formCurrency(totalExpense)}</p>
<p class="text-xs text-gray-500">Balance: ${formCurrency(balance)}</p>
`;

const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);

}





let count = 0;

// add event listener for calculate button

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',function () {
    count += 1;
    // const income = parseFloat(document.getElementById('income').value);
    const income = getInputValueById('income');
    console.log(income);
    
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    // console.log(income,software,courses,internet);
    // console.log({income,software,courses,internet});
    //    console.table({income,software,courses,internet});

    if (income <= 0 || isNaN(income)) {
        // document.getElementById('income-error').classList.remove('hidden');
        showError("income-error");
        return;
    }

    if (software <= 0 || isNaN(software)) {
        // document.getElementById('software-error').classList.remove('hidden');
        showError("software-error");
        return;
    }

    if (courses <= 0 || isNaN(courses)) {
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    if (internet <= 0 || isNaN(internet)) {
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }

    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    if (totalExpense > income) {
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }
    
    const totalExpenseElement = document.getElementById('total-expenses');
    totalExpenseElement.innerText = totalExpense.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');
    
});

// add event listener for saving button
const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click',function () {
   const savingPercentage = parseFloat(document.getElementById('savings').value);
   console.log(savingPercentage);

   const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);


   const totalExpense = software + courses + internet;
   const balance = income - totalExpense;

   const savingAmount =(savingPercentage * balance) / 100;
   console.log(savingAmount);
   
   const savingElement = document.getElementById('savings-amount');
   savingElement.innerText = savingAmount.toFixed(2);

   const remainingBalance = balance - savingAmount;
   const remainigElement = document.getElementById('remaining-balance');
   remainigElement.innerText = remainingBalance;

//    history 

// const historyItem = document.createElement('div');
// historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
// // historyItem.innerHTML =`
// // <p class="text-xs text-gray-500">Serial: ${count}</p>
// // <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
// // <p class="text-xs text-gray-500">income: ${income.toFixed(2)}</p>
// // <p class="text-xs text-gray-500">Expenses: ${totalExpense.toFixed(2)}</p>
// // <p class="text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
// // `
// historyItem.innerHTML =`
// <p class="text-xs text-gray-500">Serial: ${count}</p>
// <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
// <p class="text-xs text-gray-500">income: ${formCurrency(income)}</p>
// <p class="text-xs text-gray-500">Expenses: ${formCurrency(totalExpense)}</p>
// <p class="text-xs text-gray-500">Balance: ${formCurrency(balance)}</p>
// `;

// const historyContainer = document.getElementById('history-list');
// historyContainer.insertBefore(historyItem, historyContainer.firstChild);
// // document.getElementById('history-section').classList.remove('hidden');
addToHistory(income, totalExpense, balance);
    
});

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click',function(){
historyTab.classList.add( 'text-white', 'font-semibold' ,'bg-gradient-to-r' ,'from-blue-500' ,'to-purple-600');
historyTab.classList.remove('text-gray-600');

assistantTab.classList.remove( 'text-white', 'font-semibold' ,'bg-gradient-to-r' ,'from-blue-500' ,'to-purple-600');

assistantTab.classList.add('text-gray-600');
document.getElementById('expense-form').classList.add('hidden');
document.getElementById('history-section').classList.remove('hidden');
});

assistantTab.addEventListener('click',function(){
assistantTab.classList.add(
    'text-white', 'font-semibold' ,'bg-gradient-to-r' ,'from-blue-500' ,'to-purple-600'
);

historyTab.classList.remove('text-white', 'font-semibold' ,'bg-gradient-to-r' ,'from-blue-500' ,'to-purple-600');

document.getElementById('expense-form').classList.remove('hidden');

document.getElementById('history-section').classList.add('hidden');
});


// live validation for input

document.getElementById('income').addEventListener('input',function (){
    const inputValue = parseFloat(document.getElementById('income').value);
    if (inputValue <= 0 || isNaN(inputValue)) {
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
})


