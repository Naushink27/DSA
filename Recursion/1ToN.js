function print1ToN(n){
  let i=10;
  if(n>i){
    return 
  }  
  console.log(n);

  print1ToN(++n);
  
}
print1ToN(1);