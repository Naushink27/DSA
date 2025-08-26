//write a function to count the number of digits in a number

function countDigit(num){
    let count = 0;
    if(num==0) return 1; //edge case
    num=Math.abs(num); //to handle negative numbers
    while(num != 0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

console.log(countDigit(-2345)); //output: 5