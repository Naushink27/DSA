//Prefix sum of an array is the cumulative sum of the elements of the array. It is often used to efficiently calculate the sum of a subarray in constant time after an initial preprocessing step.

function prefixSum(arr){

    let prefix=new Array(arr.length)

    //Set the first element of the prefix sum array to be the same as the first element of the input array
    prefix[0]=arr[0]

    //Iterate through the input array starting from the second element and calculate the prefix sum for each element

    for(let i=1;i<arr.length;i++){

        prefix[i]=prefix[i-1]+arr[i]
    }

    return prefix
}


//Example usage:
const arr=[1,2,3,4,5]
const prefix=prefixSum(arr)
console.log(prefix) //[1, 3, 6, 10, 15]