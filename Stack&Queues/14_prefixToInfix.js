var prefixToInfix = function (prefix) {
    let stack = [];
    for(let i = prefix.length - 1; i >= 0; i--){ // iterate from right to left
     let ch = prefix[i];
     if(ch >= "A" && ch <= "Z" || ch >= "a" && ch <= "z" || ch >= "0" && ch <= "9"){
        stack.push(ch);
     }
     else{
        let op1= stack.pop();
        let op2= stack.pop();
        let combined="("+op1+ch+op2+")"
        stack.push(combined);
     }
    }
    return stack.pop();
}

//example usage:
console.log(prefixToInfix("*+AB-CD"));
console.log(prefixToInfix("-+A*BCD"));
console.log(prefixToInfix("+A*B-C^D^E"));