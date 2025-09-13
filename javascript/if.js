function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return divide(a, b);
    }
    return "Invalid operator";
}

console.log("Addition: " + calculate(20, 5, '+'));
console.log("Subtraction: " + calculate(20, 5, '-'));
console.log("Multiplication: " + calculate(20, 5, '*'));
console.log("Division: " + calculate(20, 5, '/'));
console.log("Invalid operator test: " + calculate(20, 5, '^'));