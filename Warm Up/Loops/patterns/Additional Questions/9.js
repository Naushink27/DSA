/**
 A B C
 D E F
 G H I
 */

 let n=3;
 let count=0;
 for(let i=0;i<n;i++){
    let row=""
   
    for(let j=0;j<n;j++)
    {
          row=row+" "+String.fromCharCode(65+count)
          count ++
    }
    console.log(row);
 }