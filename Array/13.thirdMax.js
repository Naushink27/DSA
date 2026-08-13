function thirdMax(nums) {

    let first=-Infinity
    let second=-Infinity
    let third=-Infinity

    for(let i=0;i<nums.length;i++){
        let n=nums[i]
        if(n===first || n===second || n===third) continue;

        if(n>first){
            third=second
            second=first
            first=n

        }
        else if(n>second&&n!==first){
            third=second
            second=n
        }
        else if(n>third&&n!==second&&n!==first){
            third=n
        }
    }

    return third===-Infinity?first:third
}
let nums = [2,2,3,1]
console.log(thirdMax(nums))