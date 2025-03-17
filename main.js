// append current number to the screen
// append operator to the screen
// change the current num to prev num and if prev num isnt empty do calculation
// append second number to the screen
// display results

// bug cant clear dom when starting new calculation without using clear button


const display = document.querySelector('.display');


let currentNumber = "";
let previousNumber = "";
let currentOperator = ""




function appendNumberToDisplay(number) {
    currentNumber += number;
    display.value = `${previousNumber}${currentOperator}${currentNumber}`;

}

function appendOperatorToDisplay(operator) {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
        getCalculation();
    }
    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = "";
    display.value = `${previousNumber}${currentOperator}`;
}

function getCalculation() {
    if (currentNumber === "" || previousNumber === "") return;
    let result;
    let prev = parseFloat(previousNumber);
    let current = parseFloat(currentNumber);

    switch (currentOperator) {
        case '+': 
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/': 
            if (current === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    currentOperator = '';
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    currentOperator= '';
    display.value = '';
}