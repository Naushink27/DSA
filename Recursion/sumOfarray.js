function sum(x){
if(x==0){return arr[0];}

return arr[x]+sum(x-1)
}

let arr=[1,2,3,4,5,10];

sum(arr.length-1)

console.log(sum(arr.length-1));

