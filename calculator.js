let display = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button')); // Get all the buttons

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerText;

        switch (buttonText) {
            case "C": // Clear the display
                display.value = "";
                break;
            case "<": // Backspace functionality
                display.value = display.value.slice(0, -1); // Remove the last character
                break;
            case "=": // Evaluate the expression
                try {
                    display.value = eval(display.value); // Using eval to calculate the expression
                } catch (error) {
                    display.value = "Error"; // Handle invalid expressions
                }
                break;
            default: // Add other button values to the display
                display.value += buttonText;
                break;
        }
    });
});
