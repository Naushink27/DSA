//Sort colors in order of 0s, 1s and 2s 
//Three pointers approach
var sortColors = function(nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    while(mid <= end) {

        if(nums[mid]===0){
            [nums[start], nums[mid]] = [nums[mid], nums[start]];
            start++;
            mid++;

        }
        else if(nums[mid]===1){
            mid++;
        }
        else if(nums[mid] === 2){ // nums[mid] === 2
            [nums[mid], nums[end]] = [nums[end], nums[mid]];
            end--;
        }
        else{
            mid++;
         }
    }
    return nums;


}
// Example usage:
let nums = [2,0,2,1,1,0];
console.log(sortColors(nums)); 
// Output: [0,0,1,1,2,2]

//Another approach: Counting sort

var sortColorsCountingSort = function(nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for(let num of nums) {
        if(num === 0) count0++;
        else if(num === 1) count1++;
        else if(num === 2) count2++;
    }
    let index = 0;
   while(count0--) nums[index++] = 0;
   while(count1--) nums[index++] = 1;
    while(count2--) nums[index++] = 2;
    return nums;
}
// Example usage:
let nums2 = [2,0,2,1,1,0];
console.log(sortColorsCountingSort(nums2)); 
// Output: [0,0,1,1,2,2]



// Revision 1:

var sortColors1 = function(nums) {
    let count0=0;
    let count1=0;
    let count2=0;

    for(let num of nums){
        if(num===0) count0++;
        else if(num===1) count1++;
        else if(num===2) count2++;
    }
    let index=0;

    while(count0--){
        nums[index]=0;
        index++;
    }
    while(count1--){
        nums[index]=1;
        index++;
    }
    while(count2--){
        nums[index]=2;
        index++;
    }
    return nums;
}
// Example usage:
let nums3 = [2,0,2,1,1,0];
console.log(sortColors1(nums3)); 
// Output: [0,0,1,1,2,2]