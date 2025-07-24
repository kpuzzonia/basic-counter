// reference to counter element
let number = document.getElementById('number');

// reference to each button
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const clearButton = document.getElementById('clear-button');

// initialize counter variable
let counter = 0;

// onclick function for add button
addButton.onclick = function() {
    counter += 1;
    number.innerHTML = counter;
};

// onclick button for subtract button
subtractButton.onclick = function() {
    counter -= 1;
    number.innerHTML = counter;
}

// onclick button for clear
clearButton.onclick = function() {
    counter = 0;
    number.innerHTML = counter;
}