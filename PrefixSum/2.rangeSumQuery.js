//Return range sum of the array between the given indices, inclusive.

var NumArray = function(nums) {
    this.prefixSum=new Array(nums.length)
    this.prefixSum[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        this.prefixSum[i]=this.prefixSum[i-1]+nums[i]
    }
}

NumArray.prototype.rangeSum=function(left, right) {
    if(left===0) return this.prefixSum[right]
    return this.prefixSum[right]-this.prefixSum[left-1]
}

//Example usage:
const numArray=new NumArray([1,2,3,4,5])
console.log(numArray.rangeSum(0,2)) //6 (1+2+3)
console.log(numArray.rangeSum(1,3)) //9 (2+3+4)
console.log(numArray.rangeSum(0,4)) //15 (1+2+3+4+5)