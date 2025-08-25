/**
 * D
 * C D
 * B C D
 * A B C D
 */

let n=4;
for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<=i;j++){
        row=row+" "+String.fromCharCode(65+(n-i+j-1))
        
    }
    console.log(row);
}