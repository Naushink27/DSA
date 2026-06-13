//Given an mountain array, return the index of the peak element. A mountain array is defined as an array that has the following properties:
var findPeakElement = function(nums) {
    let l=0;
    let r=nums.length-1;

    while(l<r){
        let m=l+Math.floor((r-l)/2);

        if(nums[m]<nums[m+1]){
            //peak is in the right half
            l=m+1
        }
        else{
            //peak is in the left half
            r=m
        }
    }
    return l;//return r; both l and r will be the same at the end of the loop

}
// Example usage:
const nums = [5,6,7,8,4,3,2,1];
const peakIndex = findPeakElement(nums);
console.log(peakIndex); // Output: 3 (index of the peak element)