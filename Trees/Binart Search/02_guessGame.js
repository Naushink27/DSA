//I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I'll tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num) which returns three possible results (-1, 1, or 0):
// -1 : My number is lower than your guess (i.e. pick a smaller number).
// 1 : My number is higher than your guess (i.e. pick a bigger number).
// 0 : Congrats! You got it!

var guessNumber = function(n) {
    let l=1;
    let r=n;

    while(l<=r){
        let mid=l+Math.floor((r-l)/2)
        let res=guess(mid)
        if(res===0){
            return mid
        }
        else if(res<0)
            {
           r=mid-1
        }
        else{
            l=mid+1
        }
    }
}

//Example usage:
// Let's assume the picked number is 6 and n is 10
function guess(num) {
    const pickedNumber = 6; // This is the number we are trying to guess
    if (num === pickedNumber) {
        return 0;
    } else if (num < pickedNumber) {
        return 1;
    } else {
        return -1;
    }
}
console.log(guessNumber(10)) // Output: 6