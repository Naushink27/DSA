let negative=0;
function NegativeNumInArray(arr) {
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        negative++;
    }
}
return negative;
}

let arr=[-1,2,-3,4,-5,6];
let result = NegativeNumInArray(arr);
console.log(result); // Output: 3 (3 negative numbers in the array)