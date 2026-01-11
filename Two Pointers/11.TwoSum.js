var twoSum=function(nums, target) {

    let n=nums.length;

    let map={}

    // Storing the elements in the map

    for(let i=0;i<n;i++){
        map[nums[i]]=i;
    }

  // Traversing through the array to find the complement
  
  for(let i=0;i<n;i++){
       let pair=target-nums[i];
       if(pair in map && map[pair]!==i){
           return [i,map[pair]];
       }
  }
}

// Example usage:
console.log(twoSum([2,7,11,15], 9)); // Output: [0,1]

// Revision 1:
var twoSum1 = function(nums, target) {
    let n=nums.length;

    let map={};

    // Storing elements in the map
    for(let i=0;i<n;i++){
        map[nums[i]]=i
    }

    // Traversing through the array to find the complement

    for(let i=0;i<n;i++){
        let pair=target-nums[i];

        if(pair in map && map[pair]!==i){
            return [i,map[pair]];
        }
    }
    return [];
}

// Example usage:
console.log(twoSum1([2,7,11,15], 9)); // Output: [0,1]