//To find the sum of three integers in an array that is closest to a given target value.

var threeSumClosest = function(nums, target) {

    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    let n = nums.length;

    for(let i = 0; i < n ; i++) {
        let left = i + 1;
        let right = n - 1;
        while(left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];

            if(Math.abs(currentSum - target ) < Math.abs(closestSum- target)) {
                closestSum = currentSum;
            }

            if(currentSum < target) {
                left++;
            }
            else if(currentSum > target) {
                right--;
            }
            else{
                return currentSum; // Exact match found
            }
        }
    }
    return closestSum;
}

// Example usage:
let nums = [-1, 2, 1, -4];
let target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2

// Revision 1:

var threeSumClosest1 = function(nums, target) {

    nums.sort((a,b)=>a-b);

    let res=nums[0]+nums[1]+nums[2];

    let n=nums.length;

    for(let i=0;i<n;i++){
        let left=i+1;
        let right=n-1;
        while(left<right){
            let currSum=nums[i]+nums[left]+nums[right];

            if(Math.abs(currSum-target)<Math.abs(res-target)){
                res=currSum;
            }
            if(currSum<target){
                left++;
            }
            else if(currSum>target){
                right--;
            }
            else{
                return currSum;
            }
        }
    }
    return res;
}

// Example usage:
let nums1 = [-1, 2, 1, -4];
let target1 = 1;
console.log(threeSumClosest1(nums1, target1)); // Output: 2