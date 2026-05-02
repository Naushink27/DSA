//FInd the maximum average of a subarray of size k

function maxAverage(arr, k) {
    let windowAvg = 0;
     let sum=0
    // Calculate the average of the first 'k' elements

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    windowAvg = sum / k;
    let maxAvg = windowAvg;

    // Slide the window over the array
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k]; // Add the next element and remove the first element of the previous window
        windowAvg = sum / k;

        maxAvg = Math.max(maxAvg, windowAvg); // Update the maximum average if the current window average is greater

    }
    return maxAvg;

}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const k = 3;
console.log(maxAverage(arr, k)); // Output: 5 (average of [4, 5, 6])