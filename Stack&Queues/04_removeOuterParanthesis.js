//Remove outermost parentheses

var removeOuterParentheses = function(s) {
    let stack = [];
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if(s[i]==='('){
            stack.push(s[i]);
            if(stack.length>1){
                result += s[i];
            }
        }
        else{
            if(stack.length>1){
                result += s[i];
            }
            stack.pop();
        }
    }
    return result;
}

//example usage:
console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));

//Time complexity: O(n) where n is the length of the string s

//Without using stack

var removeOuterParentheses1 = function(s) {
    let result = '';
    let level=0;
    for (let i = 0; i < s.length; i++) {
        if(s[i]==='('){
            level++;
            if(level>1){
                result += s[i];
            }
        }
        else{
            if(level>1){
                result += s[i];
            }
            level--;
        }
    }
    return result;
}


//example usage:
console.log(removeOuterParentheses1("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));