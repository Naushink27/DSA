const maxVowelConsonant = (s) => {

    // Create a frequency map
let map={};
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            ++map[s[i]]
        }
        map[s[i]]=1;
    }
    // Count max vowels and consonants
    console.log(map);

    let maxVowel=0;
    let maxConsonant=0;
    const vowels=['a','e','i','o','u'];

    


    for(let i=0;i<s.length;i++){

        if(vowels.includes(s[i])){
             if(map[s[i]]>maxVowel){
                maxVowel=map[s[i]];
             }
        }
        else{
               if(map[s[i]]>maxConsonant){
                maxConsonant=map[s[i]];
               }
        }
    }
    return maxVowel+maxConsonant;
}

console.log(maxVowelConsonant("abciiidef")); //Output:5



/**
 * let mapKeys=Object.keys(map);
 for(let i=0;i<mapKeys.length;i++){

        if(vowels.includes(mapKeys[i])){
             if(map[mapKeys[i]]>maxVowel){
                maxVowel=map[mapKeys[i]];
             }
        }
        else{
               if(map[mapKeys[i]]>maxConsonant){
                maxConsonant=map[mapKeys[i]];
               }
        }
    }

 */