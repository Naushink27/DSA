//Two sum
//We will use hashmap to store the index of the elements in the array and check if the complement of the current element exists in the hashmap or not.

// function twoSum(nums, target) {
//     let map={}

//     for(let i=0;i<nums.length;i++){
//         let pair=target-nums[i];

//     if(map.hasOwnProperty(pair)){
//         return [map[pair],i];
//     }
//     map[nums[i]]=i;
//     }
// }


function twoSum(nums, target) {
    let map={}

    for(let i=0;i<nums.length;i++){
        map[nums[i]]=i;
    }

    for(let i=0;i<nums.length;i++){
        let pair=target-nums[i];
    if(map.hasOwnProperty(pair) && map[pair]!==i){
        return [i,map[pair]];
    }
}}
// Example 1:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]