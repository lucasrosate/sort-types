
var MIN_ARR_VALUE = 2000;
var MAX_ARR_VALUE = 15000;
var DELTA_ARR = MAX_ARR_VALUE - MIN_ARR_VALUE
// Global array, it receives the random values below
var inputArray = [];
// 0 - Quick Sort, 1 - Bubble Sort, 2 - Merge Sort
var option = 0;
// Min height value in canvas
const MIN_WIDTH = 0;
// Max height value in canvas
const MAX_HEIGHT = 600;
// Difference between
const DELTA_HEIGHT = MAX_HEIGHT - MIN_WIDTH

const CANVAS_WIDTH = 750;

var execute = false;

// Important DOM elements
var arrLengthValue = document.getElementById("arr-length-value");
var codeArrField = document.getElementById("array-field");
var outputArrField = document.getElementById("array-output");
var graphPlotArea = document.getElementById("graph-plot-area");

function changeOption(option) {
    execute = false;
    
    switch (option) {
        case 0:
            document.getElementById("selected-option").innerHTML = "Quick Sort";
            break;
        case 1:
            document.getElementById("selected-option").innerHTML = "Bubble Sort";
            break;
        case 2:
            document.getElementById("selected-option").innerHTML = "Merge Sort";
            break;
        default: break;
    }
}


/**
 * Function to draw the graph.
 * @param {Array<number>} arr
 * @param {number} arrLength 
 */
function generateGraph(arr, arrLength = arr.length) {


    const maxValue = arr.reduce((prevValue, value) => Math.max(prevValue, value));
    const minValue = arr.reduce((prevValue, value) => Math.min(prevValue, value));

    const delta = maxValue - minValue;

    const yValue = arr.map((value) => Math.floor(DELTA_HEIGHT * (value - minValue) / delta));

    const barWidth = (CANVAS_WIDTH / arrLength) - 1;

    var ctx = graphPlotArea.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, MAX_HEIGHT);
    ctx.beginPath();
    ctx.fillStyle = "rgb(101, 156, 219)";

    for (let i = 0; i < arrLength; i++)
        ctx.fillRect(barWidth * i + i, 0, barWidth, yValue[i]);

}

/**
 * This function generates a random arr with elements between 0 and 40000
 * @param {number} arrLength 
 * @return {void}
 */
function generateArray(arrLength) {
    arr = []
    let randomElem;

    for (let i = 0; i < arrLength; i++) {
        randomElem = parseInt(Math.random() * (DELTA_ARR + MIN_ARR_VALUE));
        randomElem in inputArray ? i-- : arr.push(parseInt(randomElem));
    }

    return arr;
}

/**
 * Write all the random elements in DOM.
 * @returns {void}
 */
function fillArrField(arr) {
    codeArrField.textContent =
        "[" +
        arr.join(', ')
        +
        " ]";
}

function fillOutputArrField(arr) {
    outputArrField.textContent =
        "[" +
        arr.join(', ')
        +
        " ]";
}


/**
 * Get the current value from slider triggered by
 * `onchangeinput` (that calls the function) every
 * time that the slider is dragged.
 * @param {number} value 
 */
function updateValue(value) {
    execute = false;
    arrLengthValue.innerHTML = value;
    outputArrField.innerHTML = "";
    const numberOfElements = parseInt(value)
    inputArray = generateArray(numberOfElements);
    generateGraph(inputArray);
    fillArrField(inputArray);
}


function startSort() {
    let selectedOption = document.getElementById("selected-option").innerHTML;



    switch(selectedOption) {
        case "Quick Sort":
            execute = true;
            quickSort(inputArray);
            break;
        default: break;
        
    }

}

function stopSort() {
    execute = false;
}


// Initial slider value
window.onload = function () {
    inputArray = generateArray(25);
    generateGraph(inputArray);
    changeOption(0);
    fillArrField(inputArray);
};