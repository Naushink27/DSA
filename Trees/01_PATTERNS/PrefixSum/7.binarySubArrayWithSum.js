//Return number of subarrays that sum to k

var subarraySum = function(nums, k) {
    let prefix=new Map()
    prefix.set(0,1) 
    let currSum=0
    let res=0

    for(let i=0;i<nums.length;i++){
        currSum+=nums[i]
        if(prefix.has(currSum-k)){
            res+=prefix.get(currSum-k)
        }
        prefix.set(currSum,(prefix.get(currSum) || 0)+1)

    }
    return res
}

let arr=[0,1,0,0,0,1,1]
let k=1
console.log(subarraySum(arr,k))