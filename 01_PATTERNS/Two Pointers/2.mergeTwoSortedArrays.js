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


//Revision 1:

var mergeTwoSortedArrays1= function(nums1, m,nums2,n) {
    let i=m-1;
    let j=n-1;
    let pos=m+n-1;

    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[pos]=nums1[i];
            i--;
            pos--;
        }
        else{
            nums1[pos]=nums2[j];
            j--;
            pos--;

        }
    }
    while(j>=0){
        nums1[pos]=nums2[j];
        j--;
        pos--;

    }
    return nums1;
}

// Example usage:
let res1=mergeTwoSortedArrays1([1,2,3,0,0,0],3,[2,5,6],3)
console.log(res1);