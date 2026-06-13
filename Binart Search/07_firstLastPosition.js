//FInd the first and last position of an element in a sorted array

var searchRange = function (nums, target) {
    //FInd the first position of the target
    // let l = 0;
    // let r = nums.length - 1;
    // let ans = [-1, -1]

    // while (l < r) {
    //     let m = l + Math.floor((r - l) / 2);
    //     if (nums[m] < target) {
    //         l = m + 1
    //     }
    //     else {
    //         r = m
    //     }
    // }
    // if (nums[l] == target) {
    //     ans[0] = l
    // }

    // //FInd the last position of the target
    // l = 0;
    // r = nums.length - 1;
    // while (l < r) {
    //     let m = l + Math.ceil((r - l) / 2) + 1;
    //     if (nums[m] > target) {
    //         r = m - 1
    //     }
    //     else { l = m }
    // }
    // if (nums[l] == target) {
    //     ans[1] = l
    // }
    // return ans

    /////////////////////////////////////////
    //Approach 2:

    let l=0;
    let r=nums.length-1;
    let ans = [-1,-1];

    while(l<=r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m]==target){
            ans[0]=m
            r=m-1
        }
        else if(nums[m]<target){
            l=m+1
        }
        else{
            r=m-1
        }
    }
    l=0;
    r=nums.length-1;
    while(l<=r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m]==target){
            ans[1]=m
            l=m+1
        }
        else if(nums[m]<target){
            l=m+1
        }
        else{
            r=m-1
        }
    }

    return ans;
}

// Example usage:
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
const result = searchRange(nums, target);
console.log(result); // Output: [3, 4] (the first and last positions of the target element)