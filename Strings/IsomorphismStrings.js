var isomorphism=function (s,t){

    // Creating two hash map for mappings'
    let mapStoT={}
    let mapTtoS={}

    //Iteratng over  strings.

    for(let i=0;i<s.length;i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]]=t[i]
            mapTtoS[t[i]]=s[i]
        }
        else if(mapStoT[s[i]]!== t[i] || mapTtoS[t[i]] !== s[i]){
            return false
        }
    }
    return true;
}

console.log(isomorphism("foo","bar"))
console.log(isomorphism("paper","title"))
console.log(isomorphism("far","boo"))