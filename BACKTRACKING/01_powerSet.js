var powerSet = function(nums) {

    const result = [];

    const backtrack=(path,start)=>{
      result.push([...path])

      for(let i=start;i<nums.length;i++){
        path.push(nums[i])
        backtrack(path,i+1)
        path.pop()
      }
    }
    backtrack([],0);
    return result;
}


console.log(powerSet([1,2,3]))  
console.log(powerSet([0]))  