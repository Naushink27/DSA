var findmin=function(nums){
let l=0;
let r=nums.length-1;

while(l<=r){
    //if the array is sorted

    if(nums[l]<=nums[r]){
        return nums[l]
    }

    let m=l+Math.floor((r-l)/2);

    //Reflection point
    if(nums[m]<nums[m-1]){
        return nums[m]
    }

    //IF LEFT HALF IS NOT SORTED
    if(nums[l]>nums[m]){
        r=m-1
    }
    //IF RIGHT HALF IS NOT SORTED
    else{
        l=m+1
    }
}
}

// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2];
const minElement = findmin(nums);
console.log(minElement); // Output: 0 (the minimum element in the rotated sorted array)