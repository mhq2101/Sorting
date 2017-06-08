function mergeSort(arr) {
    
}

function split(arr) {
    var res = [];
    res.push(arr.slice(0, Math.floor(arr.length/2)))
    res.push(arr.slice(Math.floor(arr.length/2)))
    return res;

}



function mergeSort(array) {
    var result = [];
    if (array.length === 1) {
        return array;
    }
    else {
        var left = mergeSort(split(array)[0]);
        var right = mergeSort(split(array)[1]);
        var j = 0;
        var i = 0;
        while (i<right.length || j<left.length) {
            if (right[i] < left[j] || left[j] === undefined) {
                result.push(right[i]);
                i++;
            }
            else {
                result.push(left[j]);
                j++;
            }
        }
        return result;

       
    }
}

  var i = [5,2,4,3, 7, 8, 54, 1, 9, 9]

  console.log(mergeSort(i));