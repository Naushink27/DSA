//Return number of continuous subarrays that sum to k

var subarraySum = function(nums, k) {
    let prefix=new Map()
    //prefix.set(0,1)

    let res=0
    let sum=0

    for(let i=0;i<nums.length;i++){
        sum+=nums[i]

        if(sum==k){
            res++
        }
        if(prefix.has(sum-k)){
            res+=prefix.get(sum-k)
        }
        prefix.set(sum,(prefix.get(sum) || 0)+1)
    }
    return res
}

let arr=[1,1,1]
let k=2
console.log(subarraySum(arr,k))