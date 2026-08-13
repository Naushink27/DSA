function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
 
    }
    return -1;
}

let arr=[1,78,10,2,11,27,9,28,54]
console.log(linearSearch(arr,110))