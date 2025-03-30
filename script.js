let currentInput = "";
let operator = "";
let previousInput = "";

function clearDisplay() {
    document.getElementById("display").value = "";
    currentInput = "";
    operator = "";
    previousInput = "";
}

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
    if (currentInput === "" && previousInput === "") return; // Prevent operator without number

    if (previousInput !== "") {
        calculateResult(); // Auto-calculate if chaining operations
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";

    // ✅ Show full expression including operator
    display.value = previousInput + operator;
}



function calculateResult() {
    if (previousInput === "" || currentInput === "") return; // Prevent calculation if incomplete

    let expression = previousInput + operator + currentInput; // Full expression
    let result = eval(expression); // Perform calculation

    display.value = expression + " = " + result; // ✅ Show "5+3 = 8"

    // Reset values for the next calculation
    previousInput = result.toString();
    currentInput = "";
    operator = "";
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
