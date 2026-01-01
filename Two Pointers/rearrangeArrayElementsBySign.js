//No adjacent elements should have the same sign
//The number of positive and negative elements will same.

var rearrangeArray = function(nums) {

    let res=[]
    let pos=0,neg=1;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res[pos]=nums[i]
            pos+=2;
        }
        else{
            res[neg]=nums[i]
            neg+=2;
        }
    }
    return res;
}

//Example Usage
console.log(rearrangeArray([3,1,-2,-5,2,-4])); //Output: [3,-2,1,-5,2,-4]


