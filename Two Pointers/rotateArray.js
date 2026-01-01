var rotateArray = function(nums, k) {

    const n=nums.length;

    k=k%n;

    //Reverse whole array
    reverse(nums,0,n-1)

    //Reverse first k elements
    reverse(nums,0,k-1)


    //Reverse last n-k elements
    reverse(nums,k,n-1)


    function reverse(arr,start,end){
        while(start<end){
            [arr[start],arr[end]]=[arr[end],arr[start]];
            start++;
            end--;
        }
    }
    return nums;
}

// Example usage:
console.log(rotateArray([1,2,3,4,5,6,7], 4)); // Output: [5,6,7,1,2,3,4]