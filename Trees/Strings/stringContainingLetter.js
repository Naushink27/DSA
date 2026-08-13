//Approach 1: Using for loop and includes() method

const stringContainingLetter1 = (str, letter) => {

    let arr=[];

    for(let i=0;i<str.length;i++){
        if(str[i].includes(letter)){
            arr.push(i);
        }
    }
    return arr;
}


const stringContainingLetter2 = (str, letter) => {

    let arr=[];
  for(let i=0;i<str.length;i++)
    { for(let j=0;j<str[i].length;j++){
        if(str[i][j]===letter){
            arr.push(i);
            break;
        }
    }}
    return arr;
}

console.log(stringContainingLetter1(["apple", "banana", "cherry", "date"], "a")); // Output: ["apple", "banana", "date"]
console.log(stringContainingLetter2(["apple", "banana", "cherry", "date"], "e")); // Output: ["cherry", "date"]