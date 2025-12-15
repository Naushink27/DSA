// Brute force Approach

//1.add values of second array to first array
//2.Sort after adding

//Approach 2: Two Pointers

var mergeTwoSortedArrays = function(nums1, m,nums2,n) {

    let p1=m-1;
    let p2=n-1;
    let pos=m+n-1;

    while(p1>=0 && p2>=0){
        if(nums1[p1]>nums2[p2]){
            nums1[pos]=nums1[p1]
            p1--;
        }
        else{
            nums1[pos]=nums2[p2]
            p2--;
        }
        pos--;
    }

    //If there are remaining elements in nums2

    while(p2>=0){
        nums1[pos]=nums2[p2];
        p2--;
        pos--;

    }
    return nums1;
}

let res=mergeTwoSortedArrays([1,2,3,0,0,0],3,[2,5,6],3)
console.log(res);