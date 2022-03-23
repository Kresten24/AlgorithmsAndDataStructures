function linearSearch(arr, val){
    for(var i=0; i<arr.length; i++){
        if(arr[i] == val) return i;
    }return -1;
}

function binarySearch(arr, val){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] != val && start < end){
        if (arr[middle] < val) start = middle + 1;
        else end = middle - 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

function naiveSearch(long, short) {
    var count =0;
    for(var i=0; i<long.length; i++){
        for(var j=0; j<short.length; j++){
            if(short[j]!==long[i+j]) break;
            if(j === short.length -1) count++;
        }
    }
    return count;
}
