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


//Revision 1:

var sortArrayByParity22 = function(nums) {
    let i=0;
    let j=1;

    while(i<nums.length && j<nums.length){
        if(nums[i]%2===0){
            i+=2;

        }
        else if(nums[j]%2===1){

            j+=2;
        }
        else{
            //swap
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i+=2;
            j+=2;
        }
    }
    return nums;
}
let res1=sortArrayByParity22([3,1,2,4,8,9,6])
console.log(res1);