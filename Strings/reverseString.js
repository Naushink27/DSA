const reverseString=function(s,k){
    s=s.split('');
//jump to every 2k index
    for(let x=0;x<s.length;x=x+2*k){
            //reverse first k characters

            let n=k;
            let mid=Math.floor(k/2);
            for(let i=0;i<mid;i++){
                let temp=s[x+i];
                s[x+i]=s[x+n-1-i];
                s[x+n-1-i]=temp;
            }
    }
    return s.join('');
}

console.log(reverseString("abcdefg",2)); //Output:"bacdfeg"