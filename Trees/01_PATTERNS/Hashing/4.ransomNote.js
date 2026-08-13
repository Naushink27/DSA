//RansomNote

var canConstruct = function(ransomNote, magazine) {
    let map={}

    for(let i=0;i<magazine.length;i++){
        if(!map[magazine[i]]){
            map[magazine[i]]=1
        }
        else{
            ++map[magazine[i]]
        }
    }

    for(let j=0;j<ransomNote.length;j++){

        if(!map[ransomNote[j]] || map[ransomNote[j]]<0){
            return false;
        }
        else{
            --map[ransomNote[j]]
        }
    }
    return true;
}
// Example 1:
console.log(canConstruct("a", "b")); // Output: false   
// Example 2:
console.log(canConstruct("aa", "ab")); // Output: false
// Example 3:
console.log(canConstruct("aa", "aab")); // Output: true