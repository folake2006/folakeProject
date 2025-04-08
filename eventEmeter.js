let calculatorBtn = document.querySelector(".calbtn");
let weightBtn = document.querySelector(".weightbtn");
let currencyBtn = document.querySelector(".currencybtn");

let calculatorElement = document.querySelector(".calculatorEvent");
let weightElement = document.querySelector(".weightEvent");
let currencyElement = document.querySelector(".currencyevent");

// Function to hide an array of elements
function hide(elements) {
    elements.forEach((element) => {
        element.classList.add('hide'); // Adding 'hide' class to hide the element
    });
}

// Function to show a single element
function show(element) {
    element.classList.remove('hide'); // Removing 'hide' class to show the element
}

// Function to activate a button
function active(element) {
    element.classList.add('active'); // Adding 'active' class to indicate active state
}

// Function to deactivate an array of buttons
function inactive(elements) {
    elements.forEach(function (element) {
        element.classList.remove('active'); // Removing 'active' class to deactivate
    });
}

// Event listener for the Calculator button
calculatorBtn.addEventListener('click', function () {
    show(calculatorElement); // Show the calculator section
    hide([weightElement, currencyElement]); // Hide other sections (weight, currency)
    active(calculatorBtn); // Activate the calculator button
    inactive([weightBtn, currencyBtn]); // Deactivate weight and currency buttons
});

// Event listener for the Weight button
weightBtn.addEventListener('click', function () {
    show(weightElement); // Show the weight converter section
    hide([calculatorElement, currencyElement]); // Hide other sections (calculator, currency)
    active(weightBtn); // Activate the weight button
    inactive([calculatorBtn, currencyBtn]); // Deactivate calculator and currency buttons
});

// Event listener for the Currency button
currencyBtn.addEventListener('click', function () {
    show(currencyElement); // Show the currency converter section
    hide([calculatorElement, weightElement]); // Hide other sections (calculator, weight)
    active(currencyBtn); // Activate the currency button
    inactive([calculatorBtn, weightBtn]); // Deactivate calculator and weight buttons
});
