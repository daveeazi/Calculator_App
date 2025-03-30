let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput === "") return;
    firstOperand = currentInput;
    operator = op;
    currentInput = "";
}

function calculateResult() {
    if (firstOperand === "" || currentInput === "") return;
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
        case "-":
            result = parseFloat(firstOperand) - parseFloat(currentInput);
            break;
        case "*":
            result = parseFloat(firstOperand) * parseFloat(currentInput);
            break;
        case "/":
            result = parseFloat(firstOperand) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    firstOperand = "";
    operator = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    firstOperand = "";
    operator = "";
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
