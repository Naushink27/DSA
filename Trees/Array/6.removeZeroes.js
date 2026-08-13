function removeZeroes(arr) {

let p1=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[p1]=arr[i]
        p1++
    }
}    
for(let j=p1;j<arr.length;j++){
    arr[j]=0
}
}

let arr=[0,1,0,3,12,28,3,17,26,27]
removeZeroes(arr)
console.log(arr)