var findPeakElement = function(nums) {
    let l=0
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
    return l;
}
// Example usage:
const nums = [1, 2, 3, 1, 5, 6, 4];
const peakIndex = findPeakElement(nums);
console.log(peakIndex); // Output: 5 (index of the peak element)