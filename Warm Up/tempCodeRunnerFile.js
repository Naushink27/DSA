function checkPalindrome(input){
    let rev=0
    let originalNum=input
    while(input>0){
        let rem=input%10
        rev=(rev*10)+rem
        input=Math.floor(input/10)
    }
    
}
    return rev===originalNum
console.log(checkPalindrome(121) )//output: true