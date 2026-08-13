function singleNumber(nums) {

    let hash={}

    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]]=1;
        }
        else{
            hash[nums[i]]++;
        }
    }
    for(let j=0;j<nums.length;j++){
        if(hash[nums[j]]===1){
            return nums[j];
        }
    }
}

let arr = [4, 1, 2, 1, 2]
console.log(singleNumber(arr))


// Another approach

function singleNumber2(nums) {


    xor=0;
    for(let i=0;i<nums.length;i++){

        xor=xor ^ nums[i];
    }
    return xor;
}

let arr2 = [2, 2, 1]
console.log(singleNumber2(arr2))