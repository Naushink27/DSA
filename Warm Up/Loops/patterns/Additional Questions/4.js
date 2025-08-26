/**
 1
 2 3
 4 5 6
 */

 let n=3;
    let count=1;

    for(let i=0;i<n;i++){
        let row=""
        for(let j=0;j<=i;j++){
            row=row+" "+count
            count++
        }
        console.log(row);
    }