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