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