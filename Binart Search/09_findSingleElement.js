//given an array of integers where every element appears twice except for one, find that single one.
//have to use time complexity of O(log n) and space complexity of O(1)

var singleNumber = function(nums) {
let l=0;
let r=nums.length-1;

while(l<=r){
    let m=l+Math.floor((r-l)/2);

    //check if pair exist on the left side

    if(nums[m]===nums[m-1]){
        //Pair exists on the side which have odd number of elements

        //check if left side has odd number of elements
        let leftCount=m-l+1;
        if(leftCount%2===1){
            r=m-2;
        }
        //Right side has odd number of elements
        else{
            l=m+1
        }
    }

    //check if pair exist on the right side

    else if(nums[m]===nums[m+1]){
    
        let leftCount=m-l;
        //Left side has odd number of elements
        if(leftCount%2===1){
            r=m-1
        }
        //Right side has odd number of elements
        else{
            l=m+2
        }

    }
    else{
        return nums[m];
    }
}

}

// Example usage:
const nums = [1,1,2,3,3,4,4,8,8];
const single = singleNumber(nums);
console.log(single); // Output: 2 (the single element)

const nums2 = [1,1,2,3,3,4,4]
const single2 = singleNumber(nums2);
console.log(single2); // Output: 2 (the single element)

const nums3 = [1,1,2]
const single3 = singleNumber(nums3);
console.log(single3); // Output: 2 (the single element)