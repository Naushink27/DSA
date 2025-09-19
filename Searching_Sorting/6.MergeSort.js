function mergeSort(nums){
    if(nums.length<=1) return nums;

    let mid=Math.floor(nums.length/2)
    let left=mergeSort(nums.slice(0,mid))
    let right=mergeSort(nums.slice(mid))

    return merge(left,right)
}
function merge(left,right){
    let res=[],i=0,j=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        }
        else{
            res.push(right[j])
            j++
        }
    }
    return [...res, ...left.slice(i) , ...right.slice(j)]

}


let arr=[5,7,8,9,1,3,10,11]

console.log(mergeSort(arr))