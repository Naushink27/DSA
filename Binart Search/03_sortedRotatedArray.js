// Binary Search in a Sorted Rotated Array
function searchInRotatedArray(arr, target) {
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=left+Math.floor((right-left)/2);

        if(arr[mid]===target){
            return mid;
        }
        // Check if the left half is sorted

        if(arr[left]<=arr[mid]){
            // If target is in the left half
            if(target<arr[mid] && target>=arr[left]){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        // If the right half is sorted
        else{
            // If target is in the right half
            if(target>arr[mid]&& target <=arr[right]){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
    }
    return -1; // Target not found
}

// Example usage:
const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 5;
const result = searchInRotatedArray(arr, target);
console.log(result); // Output: 4 (index of the target in the array)