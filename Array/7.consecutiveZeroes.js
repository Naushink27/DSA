function maxZeroes(arr){
    let currCount=0;
    let maxCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            currCount++
        }
        else{
            maxCount=Math.max(maxCount,currCount)
            currCount=0
        }
    }
    return Math.max(maxCount,currCount)
}

let arr=[0,1,0,0,1,1,1,0,0,0,1,1,0]
console.log(maxZeroes(arr))