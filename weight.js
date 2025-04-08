document.getElementById('submitbtn').onclick = function() {
    let currency;
    let currencyValue = document.getElementById('text').value;

    // Check if the input is empty
    if (!currencyValue) {
        document.getElementById('display').innerHTML = 'Please enter a value';
        return;
    }

    // Convert the input to a number
    currency = Number(currencyValue);
    
    // Conversion functions
    function todollar(currency) {
        return (currency / 1500);
    }

    function tonaira(currency) {
        return (currency * 1500);
    }

    // Check which radio button is selected and perform the conversion
    if (document.getElementById('dollarradio').checked) {
        currency = todollar(currency);
        document.getElementById('display').innerHTML = '$' + currency.toFixed(2); // Added .toFixed(2) for cleaner output
    }
    else if (document.getElementById('nairaradio').checked) {
        currency = tonaira(currency);
        document.getElementById('display').innerHTML = '#' + currency.toFixed(2); // Added .toFixed(2)
    }
    else {
        document.getElementById('display').innerHTML = 'Please select a currency';
        return;
    }

    // Clear input field and reset radio buttons after displaying result
    document.getElementById('text').value = '';
    document.getElementById('dollarradio').checked = false;
    document.getElementById('nairaradio').checked = false;
}
