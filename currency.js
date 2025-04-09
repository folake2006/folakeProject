document.getElementById('submitbtnweiht').onclick = function() {
    let weight;
    let weightValue = document.getElementById('textweight').value;

    // Check if the input is empty
    if (!weightValue) {
        document.getElementById('displayweight').innerHTML = 'Please enter a value';
        return;
    }

    // Convert the input to a number
    weight = Number(weightValue);
    
    // Conversion functions
    function topounds(weight) {
        return (weight * 2.205 );
    }

    function tokilogram(weight) {
        return (weight / 2.205);
    }

    // Check which radio button is selected and perform the conversion
    if (document.getElementById('kilogramradio').checked) {
        weight = topounds(weight);
document.getElementById('displayweight').innerHTML =  weight.toFixed(2) + 'Lb'; // Added .toFixed(2) for cleaner output
    }
    else if (document.getElementById('poundsadio').checked) {
        weight = tokilogram(weight);
        document.getElementById('displayweight').innerHTML =  weight.toFixed(2) + "Kg"; // Added .toFixed(2)
    }
    else {
        document.getElementById('displayweight').innerHTML = 'Please select a mass';
        return;
    }

    // Clear input field and reset radio buttons after displaying result
    document.getElementById('textweight').value = '';
    document.getElementById('kilogramradio').checked = false;
    document.getElementById('poundsadio').checked = false;
}
