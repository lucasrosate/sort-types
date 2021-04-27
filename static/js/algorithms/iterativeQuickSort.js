const Stack = require('../dataTypes/Stack');
const swap = require('./common/swap');

function iterativeQuickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length <= 1) return arr;

    const stack = new Stack();

    stack.push(left);
    stack.push(right);

    while (!stack.isEmpty()) {
        const high = stack.pop();
        const low = stack.pop();

        const partitionIdx = partitionArrIterative(arr, low, high);

        if (partitionIdx - 1 > low) {
            stack.push(low);
            stack.push(partitionIdx - 1);
        }

        if (partitionIdx + 1 < high) {
            stack.push(partitionIdx + 1);
            stack.push(high);
        }

        console.log(arr);
    }
}

function partitionArrIterative(arr, left, right) {
    let i = left - 1;

    for (let j = left; j <= right - 1; j++) {
        if (arr[j] <= arr[right]) {
            i += 1;
            arr = swap(arr, i, j);
        }
    }

    arr = swap(arr, i + 1, right);

    return i + 1;
}