/**
 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that 
each unique element appears only once. The relative order of the elements should be kept the same. 
 Then return the number of unique elements in nums
 **/

let x=0;
function removeDuplicates(nums){
for(let i=0;i<nums.length;i++){
       if(nums[i]>nums[x]){
        x=x+1;
        nums[x]=nums[i];
       }
}
return x+1;
}

console.log(removeDuplicates([1,1,2])) //output: 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) //output: 5