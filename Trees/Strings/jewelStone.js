//Approach 1: Using nested loops
var stoneJewel=function(stone, jewel){
let count=0;
    for(let i=0;i<jewel.length;i++){
    for(let j=0;j<stone.length;j++){
        if(jewel[i]===stone[j]){
            count++;}

    }
    }
    return count;
}

//Approach 2:using hash map

var stoneJewel2=function(stone, jewel){

    let hash=new Set(jewel)
    let count=0;
    for(let i=0;i<stone.length;i++){
        if(hash.has(stone[i])){
            count++;
        }
    }
    return count;
}

console.log(stoneJewel("aAAbbbb","aA")); //Output:3
console.log(stoneJewel2("aAAbbbb","aA")); //Output:3