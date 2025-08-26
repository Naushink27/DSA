let smallest=Infinity;
let largest=-Infinity;
function smallestNumInArray(arr) {
   for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
    else if(arr[i]>largest){
        largest = arr[i];
    }
   }
}

let arr=[3,1,4,1,5,9,2,6,5];
smallestNumInArray(arr);
console.log(smallest);
console.log(largest); // Output: 1 (smallest number) and 9 (largest number)