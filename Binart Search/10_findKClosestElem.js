//Given an integer array arr, a positive integer k and an integer x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
//An integer a is closer to x than an integer b if:
//|a - x| < |b - x|, or
//|a - x| == |b - x| and a < b


var findClosestElements = function (arr, k, x) {

    let l = 0;
    let r = arr.length - 1

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m + k] - x < x - arr[m]) {
            l = m + 1
        }
        else {
            r = m;
        }
    }
    return arr.slice(l, l + k)
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 4;
const x = 3;
const closestElements = findClosestElements(arr, k, x);
console.log(closestElements); // Output: [1, 2, 3, 4] (the 4 closest elements to 3)
