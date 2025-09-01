function reverseString(s){
    let length=s.length;
    let halfLength=Math.floor(length/2)

    for(let i=0;i<halfLength;i++){
        let temp=s[i];
        s[i]=s[length-1-i]
        s[length-1-i]=temp;
    }
}


let arr=['h','e','l','l','o'];
reverseString(arr);
console.log(arr);