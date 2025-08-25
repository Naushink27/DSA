/***
 1 2 3 4
 1 2 3 4
 1 2 3 4
 */

 let n=4;
 for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=n;j++){
        row=row+" "+j
    }
    console.log(row);
 }

 //for reverse
//   let n=4;
//  for(let i=1;i<=n;i++){
//     let row=""
//     for(let j=n;j>0;j--){
//         row=row+" "+j
//     }
//     console.log(row);
//  }