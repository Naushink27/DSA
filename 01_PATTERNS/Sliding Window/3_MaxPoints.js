//Finding maximum points that can be obtained by selecting k consecutive elements in an array

function maxPoints(arr,k){
    let n=arr.length
    let lsum=0
    let rsum=0

    let maxPoints=0
    let rindx=n-1

    //Calculate the sum of the first 'k' elements from the left

    for(let i=0;i<k;i++){
        lsum+=arr[i]
    } 
    maxPoints=lsum

    //Calculate the sum of the first 'k' elements from the right and lft combo

    for(let i=k-1;i>=0;i--){
        lsum-=arr[i]
        rsum+=arr[rindx--]
       
        maxPoints=Math.max(maxPoints,lsum+rsum)
    }
    return maxPoints

}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const k = 3;
console.log(maxPoints(arr, k)); // Output: 15 (sum of [4, 5, 6])
