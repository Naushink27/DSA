var infixToPrefix = function (infix) {
    let stack = [];
    let ans = "";

    // Step 1: Reverse infix and swap brackets
    infix = reverseAndSwap(infix);

    // Step 2: Convert to postfix
    for (let i = 0; i < infix.length; i++) {
        let ch = infix[i];

        // Operand
        if (
            (ch >= "A" && ch <= "Z") ||
            (ch >= "a" && ch <= "z") ||
            (ch >= "0" && ch <= "9")
        ) {
            ans += ch;
        }

        // Opening bracket
        else if (ch === "(") {
            stack.push(ch);
        }

        // Closing bracket
        else if (ch === ")") {
            while (stack.length && stack[stack.length - 1] !== "(") {
                ans += stack.pop();
            }
            stack.pop(); // remove '('
        }

        // Operator
        else {
            while (
                stack.length &&
                stack[stack.length - 1] !== "(" &&
                (
                    precedence(stack[stack.length - 1]) > precedence(ch) ||
                    (
                        precedence(stack[stack.length - 1]) === precedence(ch) &&
                        ch === "^"
                    )
                )
            ) {
                ans += stack.pop();
            }

            stack.push(ch);
        }
    }

    // Remaining operators
    while (stack.length) {
        ans += stack.pop();
    }

    // Step 3: Reverse postfix to get prefix
    return reverseString(ans);
};


// Reverse string and swap brackets
function reverseAndSwap(str) {
    let arr = str.split("");

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let left = arr[start];
        let right = arr[end];

        arr[start] = right === "(" ? ")" :
                     right === ")" ? "(" :
                     right;

        arr[end] = left === "(" ? ")" :
                   left === ")" ? "(" :
                   left;

        start++;
        end--;
    }

    return arr.join("");
}


// Simple reverse (no bracket swapping)
function reverseString(str) {
    return str.split("").reverse().join("");
}


// Operator precedence
function precedence(ch) {
    if (ch === "+" || ch === "-") {
        return 1;
    }
    else if (ch === "*" || ch === "/") {
        return 2;
    }
    else if (ch === "^") {
        return 3;
    }
    else {
        return -1;
    }
}


// Examples
console.log(infixToPrefix("A+B*C")); 
// +A*BC

console.log(infixToPrefix("(A+B)*C")); 
// *+ABC

console.log(infixToPrefix("A+B*(C^D-E)^(F+G*H)-I")); 
// -+A*B^-^CDE+FGH I
