//NextGreater ELement 

var nextGreaterElement = function(nums1, nums2) {
    let ngeMap={}
    let stack=[]

    let n=nums2.length
    stack.push(nums2[n-1])
    ngeMap[nums2[n-1]]=-1

    for(let i=n-2;i>=0;i--){
        while(stack.length){
            if(stack[stack.length-1]<nums2[i]){
                stack.pop()
            }
            else{
                ngeMap[nums2[i]]=stack[stack.length-1]
                break;
            }
        }
        
        if(stack.length==0){
            ngeMap[nums2[i]]=-1
        }
        stack.push(nums2[i])
        
    }
    let ans=[]
    for(let i=0;i<nums1.length;i++){
        ans.push(ngeMap[nums1[i]])
    }
    return ans
}

//example usage:
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));
console.log(nextGreaterElement([2,4],[1,2,3,4]));