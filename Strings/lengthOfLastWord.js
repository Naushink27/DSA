// const lengthOfLastWord = function(s) {

//     s=s.trim();
//     s=s.split(" ");
//     return s[s.length-1].length;
// }



// Optimized Code

const lengthOfLastWord = function(s) {
    //index of last character

    let n=s.length-1;

    //remove trailing spaces
    while(n>=0){
        if(s[n]!==" ") break;
      --n;
    }

    //count length of last word
    let count=0;

    while(n>=0){

        if(s[n]==" ") break;
        
        --n;
        ++count;
    }
    return count;
}

console.log(lengthOfLastWord("Hello World  "))