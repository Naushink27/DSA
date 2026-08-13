/**
 1
 2 3
 3 4 5
 4 5 6 7
 */


 let n=4
 for(let i=1;i<=n;i++){
    let row=""
    let val=i
    for(let j=1;j<=i;j++){
        row=row+" "+val
        val++
    }
    console.log(row);
 }