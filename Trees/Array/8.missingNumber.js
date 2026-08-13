function missingNumber(nums){
    let n= nums.length;
    let totalSum=n*(n+1)/2;
    let partialSum=0;

    for(let i=0;i<nums.length;i++){
        partialSum+=nums[i];
    }

    return totalSum-partialSum;
}

let arr=[3,0,1]
console.log(missingNumber(arr))

// Another approach

function missingNumber2(nums){
    nums.sort((a,b)=>a-b);

    for(let i=1;i<nums.length;i++)
{
    if(nums[1]!==nums[i-1]+1){
        return nums[i-1]+1;
    }
}
return nums.length
}


let arr2=[0,1]
console.log(missingNumber2(arr2))