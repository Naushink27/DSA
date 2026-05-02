//Given a binary array, have to return maximum number of consecutive 1's in the array
//nums = [1,1,0,1,1,1]

function maxConsecutiveOnes(arr){
let i=0;
let j=0;
let maxCount=0;
while(j<arr.length){
    if(arr[j]===1){
        j++;

    }
    else{
        maxCount=Math.max(maxCount,j-i+1)
        j++;
        i=j
    }
}
return maxCount;
}

// Example usage:
const arr = [1, 1, 0, 1, 1, 1];
console.log(maxConsecutiveOnes(arr)); // Output: 3 (the longest sequence of 1's is [1, 1, 1])
