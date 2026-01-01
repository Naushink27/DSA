//Partion given an array of integers nums and an integer pivot, partition the array into three parts:
//All elements less than pivot come before all elements equal to pivot.
//All elements equal to pivot come before all elements greater than pivot.
//The relative order of the elements in each partition should be maintained.


var pivotArray = function(nums, pivot) {

    let res=[];

//First part: elements less than pivot
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            res.push(nums[i]);
        }
    }
//Second part: elements equal to pivot
    for(let i=0;i<nums.length;i++){
        if(nums[i]===pivot){
            res.push(nums[i]);
        }   
    }
//Third part: elements greater than pivot
    for(let i=0;i<nums.length;i++){
        if(nums[i]>pivot){
            res.push(nums[i]);
        }   
    }
    return res;
}

//Example Usage
console.log(pivotArray([9,12,5,10,14,3,10],10));