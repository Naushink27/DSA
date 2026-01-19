// //Reverse prefix of word

// function reversePrefix(word, ch) {
//     let index = -1;

// for (let i = 0; i < word.length; i++) {
//     if (word[i] === ch) {
//         index = i;
       
//     }
// }
//  if (index === -1) {
//         return word;
//     }

//     let length = index + 1;
//     let halfLength = Math.floor(length / 2);

//     for (let i = 0; i < halfLength; i++) {
//         let temp = word[i];
//         word[i] = word[length - 1 - i];
//         word[length - 1 - i] = temp;
//     }
//     return word;
    
// }

   

// // Example usage:
// let word = "abcdefd";
// let ch = "d";
// let result = reversePrefix(word, ch);
// console.log(result); // Output: "dcbaefd"

//Cant use above code as it is for strings as strings are immutable in js

//Reverse prefix of word
function reversePrefix(word, ch) {
    let index = -1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            index = i;
            break;
        }}
    if (index === -1) {
        return word;
    }
    let charArray = word.split('');
    let length = index + 1;
    let halfLength = Math.floor(length / 2);
    for (let i = 0; i < halfLength; i++) {
        let temp = charArray[i];
        charArray[i] = charArray[length - 1 - i];
        charArray[length - 1 - i] = temp;
    }
    return charArray.join('');
}

// Example usage:
let word = "abcdefd";
let ch = "d";
let result = reversePrefix(word, ch);
console.log(result); // Output: "dcbaefd"


//Revision:1

function reversePrefix(word, ch) {
    let index=-1;
for(let i=0;i<word.length;i++){
    if(word[i]===ch){
        index=i;
        break;
    }
}
    if(index===-1){
        return word;
    }
    let arr=word.split('');
    let left=0;
    let right=index;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr.join('');


}
// Example usage:
let word2 = "xyxzxe";
let ch2 = "z";
let result2 = reversePrefix(word2, ch2);
console.log(result2); // Output: "zxyxxe"