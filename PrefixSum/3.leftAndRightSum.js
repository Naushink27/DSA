//REturn answer array of size n where answer[i] = sum of elements to the left of i - sum of elements to the right of i

var leftRightDifference = function(nums) {

    const n=nums.length
   let leftSum=0;
   let rightSum=0;

   for(let i=0;i<n;i++){
    rightSum+=nums[i]
   }
   let answer=[]

   for(let i=0;i<n;i++){
    rightSum-=nums[i]
    
    answer.push(Math.abs(leftSum-rightSum))

    leftSum+=nums[i]
   }
    return answer;

}

//Example usage:
console.log(leftRightDifference([10,4,8,3])) //[1, 5, 3, 7]