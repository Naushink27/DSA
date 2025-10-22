//Approach 1: Using built in functions

/*
const lengthOfLastWord = function(s) {

    s=s.trim();
    s=s.split(" ");
    return s[s.length-1].length;
}
*/



// Approach 2

/*
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
    */

//Approach 3
const lengthOfLastWord = function(s) {

    let n=s.length-1;

    let count=0;

    while(n>=0){
        if(s[n]!==" "){
            ++count;
        }

        else if(count>0){
            break;
        }
        --n;
    }
    return count;
}

console.log(lengthOfLastWord("Hello  kirs  World  "))