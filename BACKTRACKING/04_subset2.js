
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b)
    const res=[]

    const backtrack=(path,start)=>{
        res.push([...path])
        for(let i=start;i<nums.length;i++){
            if(i>start && nums[i]===nums[i-1]) continue;
            path.push(nums[i])
            backtrack(path,i+1)
            path.pop()
        }
    }
    backtrack([],0)
    return res;
}

console.log(subsetsWithDup([1,2,2]))