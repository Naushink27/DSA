//Valid Palindrome: Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

function isPalindrome(s) {
    s=s.toLowerCase()

    let left=0;
    let right=s.length-1;

    while(left<right){
        if(!s[left].match(/[a-z0-9]/)){
            left++;
        }
        else if(!s[right].match(/[a-z0-9]/)){
            right--;
        }
        else if(s[left]!==s[right]){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) //true