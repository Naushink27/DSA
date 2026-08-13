//Valid pallindrome II: Given a string s, return true if the s can be palindrome after deleting at most one character from it.
const validPallindrom=function(s){

    const isPal=function(i,j){
        while(i<j){
            if(s[i]!==s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    let i=0;
    let j=s.length-1;

    while(i<j){
        if(s[i]!==s[j]){
            return isPal(i+1,j) || isPal(i,j-1)

        }
        i++;
        j--;
    }
    return true;
}

console.log(validPallindrom("abca"))//true
console.log(validPallindrom("deeee"))//false