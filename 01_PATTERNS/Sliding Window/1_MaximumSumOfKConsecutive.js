//Finding maximum sum of k consecutive elements in an array

function maxSum(arr, k) {
    let windowSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let maxSum = windowSum;

    // Slide the window over the array
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Add the next element and remove the first element of the previous window
        maxSum = Math.max(maxSum, windowSum); // Update the maximum sum if the current window sum is greater
    }
    return maxSum;
}
// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const k = 3;
console.log(maxSum(arr, k)); // Output: 15 (sum of [4, 5, 6])