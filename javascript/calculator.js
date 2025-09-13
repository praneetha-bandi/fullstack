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

console.log("Addition: " + add(20, 5));
console.log("Subtraction: " + subtract(20, 5));
console.log("Multiplication: " + multiply(20, 5));
console.log("Division: " + divide(20, 5));