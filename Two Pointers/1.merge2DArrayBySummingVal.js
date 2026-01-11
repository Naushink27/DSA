//Brute Force Approach


var mergeArrays = function(nums1, nums2) {

    let map = new Map();

    //Inserting all elements of first array into map

    for (let i = 0; i < nums1.length; i++) {

        let key = nums1[i][0];
        let val = nums1[i][1];
        map.set(key, val);
    }

    //Iterating through second array and updating values in map

    for (let i = 0; i < nums2.length; i++) {

        let key = nums2[i][0];
        let val = nums2[i][1];
        if (map.has(key)) {
            map.set(key, map.get(key) + val);
        }}
    //Creating result array from map

    let res=[...map.entries()].sort((a,b)=>a[0]-b[0]);
    return res;
}
console.log(mergeArrays([[1,2],[2,3],[4,5]],[[1,4],[3,2],[4,1]]))



//Optimal Approach using Two Pointers



var mergeArrays = function(nums1, nums2) {
    let i=0;
    let j=0;
    let res=[];

    while(i<nums1.length && j<nums2.length){
        if(nums1[i][0]<nums2[j][0]){
            res.push(nums1[i]);
            i++;
        }
        else if(nums1[i][0]>nums2[j][0]){
            res.push(nums2[j]);
            j++;
        }
        else{
            res.push([nums1[i][0], nums1[i][1]+nums2[j][1]]);
            i++;
            j++;
        }
    }
    while(i<nums1.length){
        res.push(nums1[i]);
        i++;
    }
    while(j<nums2.length){
        res.push(nums2[j]);
        j++;
    }
    return res;


}

console.log(mergeArrays([[1,2],[2,3],[4,5]],[[1,4],[3,2],[4,1]]))

















//Revision 1:

var mergeArrays1 = function(nums1, nums2) {
let i=0;
let j=0;
let res=[];

while(i<nums1.length && j<nums2.length){
    if(nums1[i][0]<nums2[j][0]){
        res.push(nums1[i]);
        i++;
    }
    else if(nums1[i][0]> nums2[j][0]){
        res.push(nums2[j])
        j++;
    }

    else{
        res.push([nums2[j][0],nums1[i][1]+nums2[j][1]]);
        i++;
        j++;
    }
}
return res;
}

console.log(mergeArrays1([[1,2],[2,3],[4,5]],[[1,4],[3,2],[4,1]]))