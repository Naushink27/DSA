//Return sum of all elements in the array up to the current index, inclusive.

function runningSum(arr){
    let runningSum=new Array(arr.length)
    runningSum[0]=arr[0]
    for(let i=1;i<arr.length;i++){
        runningSum[i]=runningSum[i-1]+arr[i]
    }
    return runningSum;

}
console.log(runningSum([1,2,3,4])) //[1, 3, 6, 10]

