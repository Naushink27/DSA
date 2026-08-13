// Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

function productExceptSelf(nums) {

    let prefix=new Array(nums.length)
    let suffix=new Array(nums.length)
    let n=nums.length
    let answer=new Array(nums.length)


    prefix[0]=nums[0]
    for(let i=1;i<n;i++){
        prefix[i]=prefix[i-1]*nums[i]
    }

    suffix[n-1]=nums[n-1]

    for(let i=n-2;i>=0;i--){
        suffix[i]=suffix[i+1]*nums[i]
    }

    answer[0]=suffix[1]

    for(let i=1;i<n-1;i++){
        answer[i]=prefix[i-1]*suffix[i+1]
    }
    
    answer[n-1]=prefix[n-2]

    return answer
}

let arr=[1,2,3,4]
console.log(productExceptSelf(arr)) 