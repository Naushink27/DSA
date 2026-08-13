//Valid anagram
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    let map={}
    //Store the frequency of characters in string s in a hashmap
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }
        else{
            ++map[s[i]]
        }
    }
//Iterate through string t and check if the characters exist in the hashmap and decrease the frequency of the characters in the hashmap

for(let j=0;j<t.length;j++){

    if(!map[t[j]] || map[t[j]]<0){
        return false;
    }
    else{
        --map[t[j]]
    }
}
return true;

}

// Example 1:
console.log(isAnagram("anagram", "nagaram")); // Output: true

// Example 2:
console.log(isAnagram("rat", "car")); // Output: false