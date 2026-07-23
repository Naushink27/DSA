var postfixToInfix = function(postfix) {
    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        let ch = postfix[i];
    if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
            stack.push(ch);
    }
    else{
        let op2 = stack.pop();
        let op1 = stack.pop();
        let newExpr = "(" + op1 + ch + op2 + ")";
        stack.push(newExpr);
    }
    }
    return stack.pop();
}

//example usage:
console.log(postfixToInfix("AB+C*"));
console.log(postfixToInfix("AB+C*D-"));
console.log(postfixToInfix("AB+C*DE/-"));