const display = document.getElementById("display");

// Add number or operator to display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}