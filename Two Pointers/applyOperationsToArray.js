var applyOperations = function(arr) {

    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            arr[i]=arr[i]*2;
            arr[i+1]=0;
        }

    }

    // let right=arr.length-1;
    // let left=0;

    // while(left<right){
    //     if(arr[left]===0){
    //         [arr[left],arr[right]]=[arr[right],arr[left]];
    //         right--;
    //     }
    //     else{
    //         left++;
    //     }
    // }

    // Optimized approach to move zeros to the end
    let idx=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[idx]=arr[i];
            idx++;
        }

    }
    while(idx<arr.length){
        arr[idx]=0;
        idx++;
    }
    return arr;
}

// Example usage:
console.log(applyOperations([1,2,2,1,1,0])); // Output: [4,2,0,0,0,0]