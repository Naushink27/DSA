

function secondLargest(arr){
    let first=-Infinity;
    let second=-Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>first){
            second=first;
            first=arr[i];
        }
        else if(arr[i]>second && arr[i]!=first){
            second=arr[i];
        }
    }
    return second;
}

let arr=[3,1,4,1,5,9,2,6,5];
let result = secondLargest(arr);
console.log(result); // Output: 6 (the second largest number in the array)