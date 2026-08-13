var groupAnagram=function (strs){
    let map={};

    //Iterating over each string.

    for(let i=0;i<strs.length;i++){

        let sortedStr= strs[i].split("").sort().join("");

        if(!map[sortedStr]){
            map[sortedStr]=[strs[i]];
        }
        else{
            map[sortedStr].push(strs[i])
        }

    }

    return [... Object.values(map)]
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))