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



//Revision 1:
var applyOperations1 = function(arr) {

    //Step 1: Apply the operations

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr[i]=arr[i]*2;    
            arr[i+1]=0;
            i++; // Skip the next element as it's already processed
        }
    }

    //Step 2: Move all zeros to the end

    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[index]=arr[i];
            index++;
        }

    }

    // Fill the remaining positions with zeros
    while(index<arr.length){
        arr[index]=0;
        index++;
    }
    return arr;
}

// Example usage:
console.log(applyOperations1([1,2,2,1,1,0])); // Output: [4,2,0,0,0,0]