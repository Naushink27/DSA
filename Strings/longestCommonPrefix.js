var longestCommonPrefix = function(strs) {

    let x=0;
while(x<strs[0].length){
    let char=strs[0][x]
      for(let i=1;i<strs.length;i++){
              if(char !== strs[i][x]||x===strs[i].length){
                return strs[0].slice(0,x)
              }
      }
      x++;
}
return strs[0];
}

console.log(longestCommonPrefix(["flower","flow","flight"])) //Output:"fl"

console.log(longestCommonPrefix(["dog","racecar","car"])) //Output:""