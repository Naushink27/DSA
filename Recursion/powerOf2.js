function powerOf2(n) {
if(n==1){ return true;}

else if(n<0 || n%2!=0){
    return false;
}
return powerOf2(n/2)
}

console.log(powerOf2(16));
console.log(powerOf2(8));
console.log(powerOf2(6));
