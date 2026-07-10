//Given an array of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.


var dailyTemperatures = function(temp) {
 let stack=[]
 let n=temp.length
 let ans=Array(n).fill(0)

stack.push(n-1)
ans[n-1]=0

for(let i=n-2;i>=0;i--){
    while(stack.length){
        let top=stack[stack.length-1]
        if(temp[i]>=temp[top]){
            stack.pop()
        }
        else{
            ans[i]=top-i
            break;
        }
    }
    if(stack.length==0){
        ans[i]=0
    }
    stack.push(i)
}
return ans

}
//example usage:
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));