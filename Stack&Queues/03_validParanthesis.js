//Valid paranthesis

var isValid = function(s) {
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'

    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if(map[s[i]]){
        // if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }
        else{
            let top = stack.pop();
            if(!top || s[i]!==map[top]){
            // if(!top||(s[i] === ')' && top !== '(') || (s[i] === '}' && top !== '{') || (s[i] === ']' && top !== '[')){
                return false;
            }
        }
    }
    return stack.length === 0;
}

//Example usage:
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));