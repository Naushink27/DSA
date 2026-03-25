//Remove duplicates from sorted array which is in non-decreasing order

var removeDuplicates = function(nums) {
    if(nums.length===0) return 0;

    let x=0;

    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[x]){
            x++;
            nums[x]=nums[i];
        }

    }
    return x+1;
}
//Example Usage
console.log(removeDuplicates([1,1,2])); //Output: 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //Output: 5


//Revision 1:

var removeDuplicates1 = function(nums) {
    let x=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[x]){
            x=x+1;
            nums[x]=nums[i];
        }
    }
    return x+1;
}

//Example Usage
console.log(removeDuplicates1([1,1,2]));