//Remove a particular element from the array

var removeElement = function(nums, val) {
    let x=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[x]=nums[i];
            x++;
        }
    }
    return x;
}
//Example Usage
console.log(removeElement([3,2,2,3],3)); //Output: 2
console.log(removeElement([0,1,2,2,3,0,4,2],2)); //Output: 5