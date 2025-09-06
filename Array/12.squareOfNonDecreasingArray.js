function squareOfNonDecreasingArray(arr) {


    let l=0;
    let r=arr.length-1;
    let result=[]
    let x=arr.length-1;


    while(l<=r){
        lSquare=arr[l]*arr[l];
        rSquare=arr[r]*arr[r];

        if(lSquare>rSquare){
            result[x]=lSquare;
            l++;
        }
        else{
            result[x]=rSquare;
            r--;
        }
        x--;
    }
    return result;
}

let arr = [-4,-1,0,3,10]
console.log(squareOfNonDecreasingArray(arr))