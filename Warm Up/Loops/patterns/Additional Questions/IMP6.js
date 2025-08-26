/**
 1
 2 1
 3 2 1
 4 3 2 1
 */

 let n=4;
 for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row=row+" "+(i-j+1)
    }
    console.log(row);
 }