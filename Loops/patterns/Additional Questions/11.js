/**
 A 
 B C
 D E F
 G H I J
 */

let n=4;
let count=0;
for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        row=row+" "+String.fromCharCode(65+count)
        count++
    }
    console.log(row);
}