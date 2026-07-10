//given a circular array, find the next greater element for each element in the array. The next greater element of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

var nextGreaterElements = function(nums) {
    let arr=[...nums,...nums]
    let n=arr.length
    let stack=[]
    let ans=Array(n).fill(-1)

    stack.push(arr[n-1])
    ans[n-1]=-1

    for(let i=n-2;i>=0;i--){
        while(stack.length){
            let top=stack[stack.length-1]
            if(arr[i]>=top){
                stack.pop()
            }
            else{
                ans[i]=top
                break;
            }
        }
        if(stack.length==0){
            ans[i]=-1
        }
        stack.push(arr[i])
    }
    return ans.slice(0, nums.length)
}

//example usage:
console.log(nextGreaterElements([1,2,1]));
console.log(nextGreaterElements([1,2,3,4,3]));