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




// Revision 1:

var threeSum1 = function(nums) {
    let res=[];

    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length;i++){
        if(i==0 || nums[i]!==nums[i-1]){
            twoSumII1(nums,i,res);
        }
    }
    return res;

}
function twoSumII1(nums, x, res){
    let i=x+1;
    let j=nums.length-1;

    while(i<j){
        let sum=nums[x]+nums[i]+nums[j];
        if(sum<0){
            i++;
        }
        else if(sum>0){
            j--;
        }
        else{
            res.push([nums[x], nums[i], nums[j]]);
            i++;
            j--;
            while(i<j && nums[i]===nums[i-1]){
                i++;
            }
            while(i<j && nums[j]===nums[j+1]){
                j--;
            }
        }
    }
}
// Example usage:
console.log(threeSum1([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]
