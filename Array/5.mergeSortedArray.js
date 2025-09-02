//1.Approach: Brute Force (Simple Concatenate + Sort)

var merge = function (nums1, m, nums2, n) {

    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
    return nums1;
}


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))


//2.Approach: Two Pointer (Optimal)


var merge = function (nums1, m, nums2, n) {

    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if ((nums1Copy[p1] < nums2[p2] && p1 < m) || p2 >= n) {
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}

