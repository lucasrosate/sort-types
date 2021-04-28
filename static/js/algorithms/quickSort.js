

function quickSort(arr, left = 0, right = arr.length - 1) {
    setTimeout(() => {
        let index;
    
        if(!execute) return;

        if (arr.length) {
            index = partitionArr(arr, left, right);

            if (left < index - 1) {
                quickSort(arr, left, index - 1);
            }

            if (index < right) {
                quickSort(arr, index, right);
            }

            generateGraph(arr);
            fillPivot(arr, Math.floor((left + right) / 2));
            fillOutputArrField(arr);
        }
        
    }, delayValue);
}


function partitionArr(arr, left = 0, right = arr.length - 1) {
    let middle = Math.floor((left + right) / 2),
        pivot = arr[middle],
        i = left,
        j = right;

        

    while (i <= j) {
        while (arr[i] < pivot) { i += 1; }

        while (arr[j] > pivot) { j -= 1; }

        if (i <= j) {
            arr = swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }

    return i;
}

function fillPivot(arr, middle) {
    const delta = maxArrElementValue - minArrElementValue;
    const yValuePivot = Math.floor(DELTA_HEIGHT * (arr[middle] - minArrElementValue) / delta);

    const barWidth = (CANVAS_WIDTH / arr.length) - 1;

    var ctx = graphPlotArea.getContext('2d');
    ctx.fillStyle = "rgb(240, 80, 80)";

    ctx.fillRect(barWidth * middle + middle, 0, barWidth, yValuePivot);

}