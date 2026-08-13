//Reverse polishh notation   
// 2 1 + 3 * 4 - ==> ((2+1) *3)-4

var evalRPN = function(tokens) {
    let stack = [];
    for(let c of tokens){
        if(c=='+'){
            stack.push(stack.pop()+stack.pop());
        }
        else if(c=='-'){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b-a);
        }
        else if(c=='*'){
            stack.push(stack.pop()*stack.pop());
        }
        else if(c=='/'){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b/a));
        }
        else{
            stack.push(Number(c))
        }

    }
    return stack.pop();
}
//example usage:
console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));