var permute=function(nums){
    const res=[]
    const backtrack=(path)=>{
       for(let i=0;i<nums.length;i++){
       if(path.length===nums.length){
           res.push([...path])
           return;
       }
        if(!path.includes(nums[i])) {
        path.push(nums[i])
        backtrack(path)
        path.pop()
        }
       }
    }
    backtrack([]);
    return res;
}

console.log(permute([1,2,3]))
console.log(permute([0,1]))