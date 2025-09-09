function sumofNnum(x){
    let n=10;
  
    if(x>n){
        return 0;
    }

     return x + sumofNnum(x+1);
}

// console.log(sumofNnum(1));


function sum2(x){
    if(x==0){ return 0;}

    return x+sum2(x-1)
}

console.log(sum2(5)); 
