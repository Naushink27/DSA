//To find the sum of 4 integers in an array that is equal to a given target value.

var fourSum = function(nums, target) {

    let result = [];
    let n = nums.length;
    if(n < 4) return result;
    nums.sort((a, b) => a - b);

    for(let i=0; i < n - 3; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue; // Skip duplicates for the first number

        for(let j = i + 1; j < n - 2; j++) {
            if(j>i+1 && nums[j] === nums[j-1]) continue; // Skip duplicates for the second number

            let left = j + 1;
            let right = n - 1;
            while(left < right) {
                let currentSum = nums[i] + nums[j] + nums[left] + nums[right];

                if(currentSum< target) left++;
                else if(currentSum > target) right--;
                else{
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left - 1]) left++; // Skip duplicates for the third number
                    while(left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }
    }
    return result;
}

// Example usage:
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
console.log(fourSum(nums, target)); 
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]


// Revision 1:
var fourSum1 = function(nums, target) {

    let res=[];
    let n=nums.length;
    if(n<4) return res;

    nums.sort((a,b)=>a-b);

    for(let i=0;i<n-3;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;

        threeSumII(nums, i, target, res);
    }
    return res;
}
function threeSumII(nums, i, target, res){
    for(let j=i+1;j<nums.length-2;j++){
        if(j>i+1 && nums[j]===nums[j-1]) continue;

        twoSumII(nums, i, j, target, res);
    }
}

function twoSumII(nums, i, j, target, res){
    let left=j+1;
    let right=nums.length-1;
    while(left<right){
        let currSum=nums[i]+nums[j]+nums[left]+nums[right];
        if(currSum<target) left++;
        else if(currSum>target) right--;
        else{
            res.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
            while(left<right && nums[left]===nums[left-1]) left++;
            while(left<right && nums[right]===nums[right+1]) right--;
        }
    }
}
// Example usage:
let nums1 = [1, 0, -1, 0, -2, 2];
let target1 = 0;
console.log(fourSum1(nums1, target1)); 
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]