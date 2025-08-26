/**
  A B C
  A B C
  A B C
 */

  let n=3;
  for(let i=0;i<n;i++){
    let row=" "
    for(let j=0;j<n;j++){
        row=row+" "+String.fromCharCode(65+j)
    }
    console.log(row);
  }