const longestConsecutive = (nums) => {

    if(!nums||nums.length===0){
        return 0
    }

    let set=new Set(nums)
    let longest=0
    let count=0

    for(let it of set){
        if(!set.has(it-1)){
            count=1
            let x=it
            while(set.has(x+1)){
               x=x+1
                count++
            }
        longest=Math.max(longest,count)
        }
    }
    return longest
}

// Example 1:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])

// Example 2:
console.log(longestConsecutive([0, -1]));
// Output: 2 (The longest consecutive sequence is [-1, 0])