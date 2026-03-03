function addition(a, b) { return a + b; }
function soustraction(a, b) { return a - b; }
function multiplier(a, b) { return a * b; }
function diviser(a, b) {
    if (b === 0) return "Erreur : division par zéro";
    return a / b;
}

// Logique de la calculatrice
let currentInput = "";
let previousInput = "";
let operator = null;

const display = document.getElementById("display");

document.querySelectorAll(".key").forEach(button => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;
        const value = button.textContent;

        if (!action) {
            currentInput += value === "," ? "." : value;
            display.value = currentInput;
        } else if (action === "clear") {
            currentInput = "";
            previousInput = "";
            operator = null;
            display.value = "";
        } else if (action === "add") { previousInput = currentInput; currentInput = ""; operator = "add"; }
        else if (action === "subtract") { previousInput = currentInput; currentInput = ""; operator = "subtract"; }
        else if (action === "multiply") { previousInput = currentInput; currentInput = ""; operator = "multiply"; }
        else if (action === "divide") { previousInput = currentInput; currentInput = ""; operator = "divide"; }
        else if (action === "calculate") {
            const a = parseFloat(previousInput);
            const b = parseFloat(currentInput);
            let result;
            if (operator === "add") result = addition(a, b);
            else if (operator === "subtract") result = soustraction(a, b);
            else if (operator === "multiply") result = multiplier(a, b);
            else if (operator === "divide") result = diviser(a, b);
            display.value = result;
            currentInput = String(result);
            operator = null;
        } else if (action === "percent") {
            currentInput = String(parseFloat(currentInput) / 100);
            display.value = currentInput;
        } else if (action === "sign") {
            currentInput = String(parseFloat(currentInput) * -1);
            display.value = currentInput;
        }
    });
});