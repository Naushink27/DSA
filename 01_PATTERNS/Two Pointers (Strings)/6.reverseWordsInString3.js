//Reverse words in a string. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space.

//Example 1:
//Input: s = "the sky is blue"
//Output:"eht yks si eulb"

function reverseWords(s) {
    let arr=s.split(" ") //["","Hell0","","World","",""]

    for(let i=0;i<arr.length;i++){
        let char=arr[i].split("") //["H","e","l","l","0"]
        let left=0;
        let right=char.length-1;
        while(left<right){
            let temp=char[left]
            char[left]=char[right]
            char[right]=temp
            left++;
            right--;
        }
        arr[i]=char.join("")
    }
    return arr.join(" ") //"eht yks si eulb"
}

console.log(reverseWords("the sky is blue")) //"eht yks si eulb"