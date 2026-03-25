//Return groups of anagrams from an array of strings

var groupAnagrams = function(strs) {
    if(!strs||strs.length===0){
        return [strs]
    }

    let map={}

    //Iterate through the array of strings and sort each string and store the sorted string as key and the original string as value in a hashmap
    for(let i=0;i<strs.length;i++){
        let sortedStr=strs[i].split('').sort().join('');

        if(!map[sortedStr]){
            map[sortedStr]=[strs[i]]
        }
        else{
            map[sortedStr].push(strs[i])
        }
    }
    return [...Object.values(map)]
}

// Example 1:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
console.log(groupAnagrams([""])); // Output: [[""]]
// Example 3:
console.log(groupAnagrams(["a"])); // Output: [["a"]]