let arr=[10,3,5,2,8,33,4,9]

function heapSort(arr){
    let n=arr.length;

    //Max heap

    for(let i=Math.floor(n/2)-1;i>=0;i--)//for(let i=n-1;i>=0;i--)
        {
        heapifyDown(arr,i,n)
    }

    //Sort 
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapifyDown(arr,0,i)
    }
    return arr

}

function heapifyDown(arr,i,n){
    let largest=i
    let left=(2*i)+1
    let right=(2*i)+2


    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }
    if(i!==largest){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapifyDown(arr,largest,n)
    }
}
console.log(heapSort(arr))