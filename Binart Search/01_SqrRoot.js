// Given a positive integer x, return the positive integer y such that y * y == x, or -1 if there is no such integer.

var mySqrt = function(x) {
    if(x<2) return x;
    let l=2;
    let r=Math.floor(x/2);

    // Binary search

    while(l<=r){
        let mid=l+Math.floor((r-l)/2)
        if(x<mid**2){
            r=mid-1
        }
        else if(x>mid**2){
            l=mid+1
        }
        else{
            return mid
        }
    }
    return r;
}

console.log(mySqrt(8))
console.log(mySqrt(4))
console.log(mySqrt(1))