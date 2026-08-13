function removeElement(nums,val){
    let x=0;

    for(let i=0;i<nums.length;i++){
        if(arr[i]!==val){
            arr[x]=arr[i];
            x++;
        }
    }
    return x;
}

let arr=[3,2,2,3,4,5,3];
let val=3;
console.log(removeElement(arr,val));