// Important DOM elements
var arrLengthValue = document.getElementById("arr-length-value");
var codeArrField = document.getElementById("array-field");
var outputArrField = document.getElementById("array-output");
var graphContainer = document.getElementById("graphContainer");
var graphPlotArea = document.getElementById("graph-plot-area");
var inputDelay = document.getElementById("delay-input");

// CONSTANTS
const MIN_ARR_VALUE = 200;
const MAX_ARR_VALUE = 1000;

const DELTA_ARR = MAX_ARR_VALUE - MIN_ARR_VALUE;
const MIN_HEIGHT = 0;
const MIN_WIDTH = 0;
const MAX_HEIGHT = parseInt(graphPlotArea.getAttribute("height"));
const DELTA_HEIGHT = MAX_HEIGHT - MIN_HEIGHT;
const CANVAS_WIDTH = parseInt(graphPlotArea.getAttribute("width"));

// Canvas background dimensions
graphContainer.style.width = CANVAS_WIDTH + 50 + "px";
graphContainer.style.height = MAX_HEIGHT + 100 + "px";

// 0 - Quick Sort, 1 - Bubble Sort, 2 - Merge Sort
var option = 0;

// Global variables
var maxArrElementValue;
var minArrElementValue;
var inputArray = [];
var outputArray = [];
var delayValue = inputDelay.value;
var execute = false;


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

    maxArrElementValue = arr.reduce((prevValue, value) => Math.max(prevValue, value));
    minArrElementValue = arr.reduce((prevValue, value) => Math.min(prevValue, value));

    const delta = maxArrElementValue - minArrElementValue;

    const yValue = arr.map((value) => Math.floor(DELTA_HEIGHT * (value - minArrElementValue) / delta));

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
        randomElem = parseInt(MIN_ARR_VALUE + (Math.random() * DELTA_ARR));
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
        "[" + arr.join(', ') + " ]";
}

function fillOutputArrField(arr) {
    outputArrField.textContent =
        "[" + arr.join(', ') + " ]";
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
    outputArray = deepCopy(inputArray);
    generateGraph(inputArray);
    fillArrField(inputArray);
}

function updateDelayValue() {
    delayValue = inputDelay.value;
}

function startSort() {
    let selectedOption = document.getElementById("selected-option").innerHTML;
    if (isSorted(outputArray)) {
        console.log(outputArray);
        outputArray = deepCopy(inputArray);
        console.log(outputArray);
        execute = false;
    }
    if (execute) return;
    execute = true;

    switch (selectedOption) {
        case "Quick Sort":
            quickSort(outputArray)
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
    outputArray = deepCopy(inputArray);
    generateGraph(inputArray);
    changeOption(0);
    fillArrField(inputArray);
};