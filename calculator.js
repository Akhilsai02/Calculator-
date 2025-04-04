function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('result').value;
    document.getElementById('result').value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    let currentDisplay = document.getElementById('result').value;
    try {
        let result = eval(currentDisplay);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}