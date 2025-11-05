var validAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    //Creating a map

    let map={};

    //Adding elements of s to map
    for( let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1;
        }
        else{
            ++map[s[i]]
        }
    }
     
    //Checking elements of t in map
    for(let i=0;i<t.length;t++){
        if(!map[t[i]] || map[t[i]<0]){
            return false;
        }
        else{
            --map[t[i]];
        }
    }
    return true;
}

console.log(validAnagram("anagram","nagaram")) //Output:true
console.log(validAnagram("rat","car")) //Output:false