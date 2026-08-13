// Continuous Subarray Sum

// Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.

// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

function checkSubarraySum(nums, k) {
    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if(map.has(sum % k)) {
            let index = map.get(sum % k);
            if(i-index>2){
                return true;
            }
        }
        else {
            map.set(sum % k, i);
        }
    }
    return false;
}

// Example 1:
console.log(checkSubarraySum([23, 2, 4, 6, 7], 9)); // Output: true

// Example 2:
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)); // Output: true