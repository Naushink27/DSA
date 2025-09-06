function containDuplicate(nums) {

    let hash={}

    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]){
            return true;
        }
        hash[nums[i]]=true
    }
    return false;
}

let arr = [1,2,3]
console.log(containDuplicate(arr))