
// Global array, it receives the random values below
var inputArray = [];
// 0 - Quick Sort, 1 - Bubble Sort, 2 - Merge Sort
var option = 0;
// Min height value in canvas
var minHeight = 0;
// Max height value in canvas
var maxHeight = 400;
// Difference between
var deltaHeight = maxHeight - minHeight

// Important DOM elements
var arrLengthValue = document.getElementById("arr-length-value");
var codeArrField = document.getElementById("array_field");
var graphPlotArea = document.getElementById("graph-plot-area");

/**
 * Function to draw the graph.
 * @param {number} arrLength 
 */
function generateGraph(arrLength) {
    let minValue =
        inputArray.reduce((prevValue, value) =>
            Math.max(prevValue, value))

    let maxValue =
        inputArray.reduce((prevValue, value) =>
            Math.min(prevValue, value))

    const delta = parseInt(maxValue) - parseInt(minValue);
    var yValue = inputArray.map((value) => deltaHeight * (value - minValue) / delta);

    var ctx = graphPlotArea.getContext('2d');
    ctx.fillStyle = "rgb(101, 156, 219)";
    ctx.fillRect(0, 0, 20, 20);

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
        randomElem = parseInt(Math.random() * 40000);
        randomElem in inputArray ? i-- : arr.push(parseInt(randomElem));
    }

    return arr;
}

/**
 * Write all the random elements in DOM.
 * @returns {void}
 */
function fillArrField() {
    codeArrField.textContent =
        "[" +
        inputArray.join(', ')
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
    arrLengthValue.innerHTML = value;
    const numberOfElements = parseInt(value)
    inputArray = generateArray(numberOfElements);
    generateGraph(numberOfElements);
    fillArrField();


}

// Initial slider value
window.onload = function () {
    inputArray = generateArray(10);
    fillArrField();
};