//Find the pivot index of an array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

var pivotIndex = function(nums) {
    const n=nums.length
    let leftSum=0;
    let rightSum=0;
    for(let i=0;i<n;i++){
        rightSum+=nums[i]
    }
    for(let i=0;i<n;i++){
        rightSum-=nums[i]
        if(leftSum===rightSum) return i
        leftSum+=nums[i]
    }
    return -1
}

//Example usage:
console.log(pivotIndex([1,7,3,6,5,6])) //3
console.log(pivotIndex([1,2,3])) //-1
console.log(pivotIndex([2,1,-1])) //0