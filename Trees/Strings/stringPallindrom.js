var isPalindrome = function(s) {
    //Converting to lowercase.
    s=s.toLowerCase()
    let filteredString="";
    let rev=""

    for(let i=0;i<s.length;i++){
        if(s[i].charCodeAt()>='a'.charCodeAt()&& s[i].charCodeAt()<='z'.charCodeAt() ||
          s[i].charCodeAt()>='0'.charCodeAt() && s[i].charCodeAt()<='9'.charCodeAt()
        ){
        //if(s[i].match(/[a-z0-9]/i)){
            filteredString=filteredString+s[i]
            rev=s[i]+rev;
        }
    }
    return rev===filteredString;


};
console.log(isPalindrome("A man, a plan, a canal: Panama")) //Output:true


//Aproach2: Two pointer approach

var isPalindrome2 = function(s) {
    s=s.toLowerCase()
    let left=0;
    let right=s.length-1;

    while(left<right){
        if(!s[left].match(/a-z0-9/)){
           left++;
        }
       else if(!s[right].match(/a-z0-9/)){
            right--;
        }

        else if(s[left]===s[right]){
            left++;
            right--;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isPalindrome2("A man , a plan, a canal: Panama")) //Output:true