/**
 A 
 B B
 C C C
 */

 let n=3;
 for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        row=row+" "+String.fromCharCode(65+i)
    }
    console.log(row);
 }