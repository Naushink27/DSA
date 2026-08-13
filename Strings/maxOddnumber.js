
var largestOddNumber=function(num){

    let n=num.length-1;

    while(n>=0){

       if(Number(num[n]%2!==0)) {
             return num.slice(0,n+1)

    }
    n--;
}
return "";
}
console.log(largestOddNumber("52")) //Output:5

console.log(largestOddNumber("4206")) //Output:""

console.log(largestOddNumber("35427")) //Output:"35427"