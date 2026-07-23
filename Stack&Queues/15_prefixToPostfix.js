var prefixToPostfix = function (prefix) {
    let stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        let ch = prefix[i];

        // Operand
        if (
            (ch >= "A" && ch <= "Z") ||
            (ch >= "a" && ch <= "z") ||
            (ch >= "0" && ch <= "9")
        ) {
            stack.push(ch);
        }

        // Operator
        else {
            let op1 = stack.pop();
            let op2 = stack.pop();

            let combined = op1 + op2 + ch;

            stack.push(combined);
        }
    }

    return stack.pop();
};


// Examples
console.log(prefixToPostfix("*+AB-CD"));
// AB+C-D*

console.log(prefixToPostfix("-+A*BCD"));
// ABC*D-+

console.log(prefixToPostfix("+A*B-C^D^E"));
// ABCDE^^-*+
