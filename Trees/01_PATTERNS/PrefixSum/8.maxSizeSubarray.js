//Return the maximum size of a subarray that sums to k

var maxSubArrayLen = function(nums, k) {

    let prefix=new Map()
    let currSum=0
    let res=0

    for(let i=0;i<nums.length;i++){
        currSum+=nums[i]

        if(currSum==k){
            res=i+1
        }

        else if(prefix.has(currSum-k)){
            res=Math.max(res,i-prefix.get(currSum-k))
        }
        if(!prefix.has(currSum)){
            prefix.set(currSum,i)
        }

    }
    return res
}

let arr=[1,-1,5,-2,3]
let k=3
console.log(maxSubArrayLen(arr,k))