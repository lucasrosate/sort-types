/**
 * This function change the value following procedure
 * - Store value from arr[left]
 * - Change arr[left] to arr[right]
 * - Change arr[right] to the stored value
 * @param {Array<number>} arr
 * @param {number} left 
 * @param {number} right 
 * @returns {Array<number>}
 * 
 */
function swap(arr, left, right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;

    return arr;
}