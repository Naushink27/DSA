//Move all even numbers to the front of the array followed by all odd numbers.

var sortArrayByParity = function(nums) {

    let i=0;
    let j=nums.length-1;

    while(i<j){
        if(nums[i]%2==0){
            i++;
        }
        else if(nums[j]%2==0){
            //swap
            let temp=nums[j]
            nums[j]=nums[i]
            nums[i]=temp;
            i++;
            j--;
        }
        else{
            j--;
        }
    }
    return nums;
}

let res=sortArrayByParity([3,1,2,4,7,9,6])
console.log(res);


//Revision 1:

var sortArrayByParity1 = function(nums) {

    let left=0;
    let right=nums.length-1;

    while(left<right){
        if(nums[left]%2===0){
            left++;
        }
        else if(nums[right]%2===0){
            //swap
            let temp=nums[right];
            nums[right]=nums[left];
            nums[left]=temp;
            left++;
            right--;
        }
        else{
            right--;
        }
    }
    return nums;
}
let res1=sortArrayByParity1([3,1,2,4,7,9,6])
console.log(res1);