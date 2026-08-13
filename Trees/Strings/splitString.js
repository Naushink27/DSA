const splitString = (s) => {

    // let L=0;
    // let R=0;
    let temp=0;
    let count=0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='R'){
           // ++R;
            ++temp;
        }
        else{
           // ++L
              --temp;
        }

        if(temp==0){   // if(L===R)
            ++count;
           // L=R=0;
        }
    }
    return count;
}

console.log(splitString("RLRRLLRLRL")); //Output:4