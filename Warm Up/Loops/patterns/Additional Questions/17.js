/**
 * * * *
   * * *
     * *
       * 
 */

let n = 4;
for(let i=0; i<n;i++){
    let row=""
    for(let j=0;j<i;j++){
        row=row+" "
    }
    for(let k=0;k<n-i;k++){
        row=row+" *"
    }
    console.log(row);
}