function checkVoteEligibility(age){
    if(age>=18){
        return "Eligible to vote";
    }
    return "Not eligible to vote";
}

let result = checkVoteEligibility(20);
console.log(result); // Output: Eligible to vote