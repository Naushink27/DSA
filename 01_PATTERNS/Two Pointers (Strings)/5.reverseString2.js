//Reverse first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are between k and 2k characters, then reverse the first k characters and leave the other as original.

//Example 1:
//Input: s = "abcdefg", k = 2
//Output: "bacdfeg"

function reverseStr(s, k) {
    let arr = s.split("")

    for( let i=0;i<arr.length;i+=2*k){
          let n=k;
          let mid=Math.floor(n/2);
            for(let j=0;j<mid;j++){
                let temp=arr[i+j]
                arr[i+j]=arr[i+n-1-j]
                arr[i+n-1-j]=temp
            }
    }
    return arr.join("")
    
}

console.log(reverseStr("abcdefg", 2)) //"bacdfeg"