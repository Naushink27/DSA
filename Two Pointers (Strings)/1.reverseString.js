//Given a string as array of characters, reverse the string in place using the two pointers technique.
//You must do this by modifying the input array in place with O(1) extra memory.

function reverseString(s) {

    let length = s.length;
    let halfLength = Math.floor(length / 2);

    for(let i=0;i<halfLength;i++){
        let temp=s[i];
        s[i]=s[length-1-i];
        s[length-1-i]=temp;
    }
}
//Example usage:
let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s); // Output: ["o","l","l","e","h"]