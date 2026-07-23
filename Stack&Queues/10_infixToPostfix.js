var infixToPost = function (infix) {
    let stack = [];
    let ans = ""

    for (let i = 0; i < infix.length; i++) {
        let ch = infix[i]

        if ((ch >= "A" && ch <= "Z") ||
            (ch >= "a" && ch <= "z") ||
            (ch >= "0" && ch <= "9")) {
            ans += ch
        }

        else if (ch === "(") {
            stack.push(ch)
        }
        else if (ch === ")") {
            while (stack.length && stack[stack.length - 1] !== "(") {
                ans += stack.pop()

            }
            stack.pop()
        }
        else {
            while (stack.length && precedence(ch) <= precedence(stack[stack.length - 1])) {
                ans += stack.pop()
            }
            stack.push(ch)
        }


    }
    while (stack.length) {
        ans += stack.pop()
    }
    return ans
}
precedence = function (ch) {
    if (ch === "+" || ch === "-") {
        return 1
    }
    else if (ch === "*" || ch === "/") {
        return 2
    }
    else if (ch === "^") {
        return 3
    }
    else {
        return -1;
    }
}

//example usage:
console.log(infixToPost("A+B*C"));
console.log(infixToPost("(A+B)*C"));
console.log(infixToPost("A+B*(C^D-E)^(F+G*H)-I"));