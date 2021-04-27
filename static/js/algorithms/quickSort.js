function quickSort(arr, left = 0, right = arr.length - 1) {
    setTimeout(() => {
        let index;
        
        if(!execute) return;

        generateGraph(arr);
        fillOutputArrField(arr);

        if (arr.length) {
            index = partitionArr(arr, left, right);

            if (left < index - 1) {
                quickSort(arr, left, index - 1);
            }

            if (index < right) {
                quickSort(arr, index, right);
            }
        }
    }, 100);
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