//When input array is sorted
var twoSum=function(nums, target) {
    let i=0;
    let j=nums.length-1;

    while(i<j){
        let sum=nums[i]+nums[j];
        if(sum===target){
            return [i,j];
        }
        else if(sum<target){
            i++;
        }
        else{
            j--;
        }
    }
}

// Example usage:
console.log(twoSum([2,7,11,15], 9)); // Output: [0,1]