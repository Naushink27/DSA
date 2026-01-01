var sortArrayByParity2 = function(nums) {

    let evenIndex=0;
    let oddIndex=1;

    while(evenIndex<nums.length && oddIndex<nums.length){

        if(nums[evenIndex]%2==0){
            evenIndex+=2;
        }
        else if(nums[oddIndex]%2==1){
            oddIndex+=2;
        }
        else{
            //swap

            let temp=nums[evenIndex];
            nums[evenIndex]=nums[oddIndex];
            nums[oddIndex]=temp;
            evenIndex+=2;
            oddIndex+=2;
        }
    }
    return nums;

}
let res=sortArrayByParity2([3,1,2,4,8,9,6])
console.log(res);