// append number to the screen

// appedn operator to the screen

// append second number to the screen

let currentNumber = "";
let previousNumber = "";
let currentOperand = "";



const display = document.querySelector('.display');

function appendToDisplay(number) {
    currentNumber += number;
    display.value = `${previousNumber}  ${currentOperand} ${currentNumber}`;

}

function getCalculation() {
    console.log("calcultaing")
}