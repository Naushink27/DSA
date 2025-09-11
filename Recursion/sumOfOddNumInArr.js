function sum(arr,x){

    isOdd=arr[x]%2!==0;

    if(x==0){
        if(isOdd){return arr[0];}
        else{return 0;}
    }

    if(isOdd){

        return arr[x]+sum(arr,x-1);
    }
    else{
        return 0+sum(arr,x-1);
    }


}
let arr=[1,2,3,4,5,10];

console.log(sum(arr,arr.length-1));