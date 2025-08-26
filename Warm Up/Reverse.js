function reverse(num){
    let numCopy=num;
    let rev=0;
    n=Math.abs(num);
    while(n>0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    let limit=Math.pow(2,31);
    if(rev>limit||rev<-limit) return 0;
    return (numCopy<0)? -rev:rev
}

console.log(reverse(-123)) //output: -321
console.log(reverse(120)) //output: 21