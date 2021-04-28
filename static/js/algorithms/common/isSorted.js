function isSorted(arr) {
    let i = 0;

    while (arr[i + 1]) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
        i += 1;
    }
    return true;
}