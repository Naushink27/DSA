var firstBadVersion = function(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        let mid=left+Math.floor((right-left)/2)

        if(!isBadVersion(mid)){
            left=mid+1
        }
        else{
            right=mid
        }
    }
    return right;
}

// Example usage:
// Assume we have a function isBadVersion(version) that returns true if the version is bad and false otherwise.
function isBadVersion(version) {
    const badVersion = 4; // Example: version 4 and above are bad
    return version >= badVersion;
}   
const n = 5; // Total number of versions
const result = firstBadVersion(n);
console.log(result); // Output: 4 (the first bad version)