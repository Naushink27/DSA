
/// Return the indx of the first non-repeating character in a string, or -1 if it doesn't exist.

var firstUniqChar = function(s) {
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

    //Iterate through string s and check if the characters exist in the hashmap and return the index of the first non-repeating character in a string, or -1 if it doesn't exist.

    for(let j=0;j<s.length;j++){
        if(map[s[j]]===1){
            return j;
        }
    }
    return -1;
}

// Example 1:
console.log(firstUniqChar("leetcode")); // Output: 0
// Example 2:
console.log(firstUniqChar("loveleetcode")); // Output: 2
// Example 3:
console.log(firstUniqChar("aabb")); // Output: -1