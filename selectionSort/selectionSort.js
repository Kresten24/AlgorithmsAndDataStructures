function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for (var i = 0; i < arr.length; i++) {
        var minimum = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[minimum] > arr[j]) {
                minimum = j
            }
        }
        if (i != minimum) {
            swap(arr, minimum, i)
        }
    }
    return arr;
}
