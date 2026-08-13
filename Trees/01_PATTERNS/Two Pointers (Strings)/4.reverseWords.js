let sq = "the sky is blue"
let s = "  Hell0    World  "

// s.split(" ") //["the","sky","is","blue"]
// console.log(s.split(" ").reverse().join(" ")) //"blue is sky the"
// //"blue is sky the";


let arr=s.split(" ") //["","Hell0","","World","",""]

let res=[]

for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!==""){
        res.push(arr[i])
    }

}
console.log(res.join(" ")) //"World Hell0"




//Revision 2:
var reverseWords = function(s) {
    let arr=s.split(" ") //["","Hell0","","World","",""]

    let res=[]

    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]!==""){
            res.push(arr[i])
        }
    }

    return res.join(" ") //"World Hell0"
}

console.log(reverseWords("  Hell0    World  "))

