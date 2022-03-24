function bobbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
    noSwap =false;
}
    var noSwap;
    for(var i = arr.length; i>=0; i--){
        noSwap = true;
        for(var j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
        if(noSwap) break;
    }
    return arr;
}
