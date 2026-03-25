//Brute force Approach
var maxArea = function(height) {

    let maxArea = 0;

    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length; j++){
            let area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
        }}
    return maxArea;
}

// Example usage:
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); 
// Output: 49

//Optimal Approach: Two Pointers
var maxAreaTwoPointers = function(height) {
    let left=0;
    let right=height.length-1;
    let maxArea = 0;

    while(left<right){


        if(height[left]<height[right]){
            maxArea=Math.max(maxArea,(right-left)*height[left])
            left++;
        }

        else{
            maxArea=Math.max(maxArea,(right-left)*height[right])
            right--;
        }
        
    }
    return maxArea;
}

// Example usage:
let height2 = [1,8,6,2,5,4,8,3,7];
console.log(maxAreaTwoPointers(height2)); 
// Output: 49


//Revision 1:
var maxAreaTwoPointers1 = function(height) {
    let left=0;
    let right=height.length-1;
    let maxArea = 0;

    while(left<right){
       if(height[left]<height[right]){
            maxArea=Math.max(maxArea,(right-left)*height[left])
            left++;
        }
        else{
            maxArea=Math.max(maxArea,(right-left)*height[right])
            right--;
       }
    }
    return maxArea;
}

// Example usage:
let height21 = [1,8,6,2,5,4,8,3,7];
console.log(maxAreaTwoPointers1(height21)); 
// Output: 49
