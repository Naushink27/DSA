var minElement = function(nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        let sum = 0;
        while (elem != 0) {
            let rem = elem % 10;
            sum += rem;
            elem = Math.floor(elem / 10);
        }
        res.push(sum);
    }
    return res;
};

console.log(minElement([12, 34, 56]));