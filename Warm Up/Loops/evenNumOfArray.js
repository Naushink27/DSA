let even=0;
let odd=0;

function evenNumofArray(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even++;
        }
        else{
            odd++;
        }
    }
    return [even,odd]
}

let arr=[1,2,3,4,5,6,7,8,9];
let result = evenNumofArray(arr);
console.log(result); // Output: [4, 5] (4 even numbers and 5 odd numbers)