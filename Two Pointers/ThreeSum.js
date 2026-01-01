var threeSum= function(nums) {
    let result=[];

    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length;i++){
        if(i==0 ||nums[i]!==nums[i-1]){

            twoSumII(nums,i,result);
        }
    }
    return result;
}

function twoSumII(nums, i, result){
    let left=i+1;
    let right=nums.length-1;

    while(left<right){
        let sum=nums[i]+nums[left]+nums[right];

        if(sum<0){
            left++;
        }
        else if(sum>0){
            right--;
        }
        else{
            result.push([nums[i],nums[left],nums[right]]);
            left++;
            right--;
            while(left<right && nums[left]===nums[left-1]){
                left++;
            }
            while(left<right && nums[right]===nums[right+1]){
                right--;
            }
        }

    }
}

// Example usage:
console.log(threeSum([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]
