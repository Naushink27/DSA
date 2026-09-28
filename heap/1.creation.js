class MinHeap{
   constructor(){
    this.heap=[5,10,20,30]
   }

   getleftChildIndx(i){
    return 2*i+1
   }
   getrightChildIndx(i){
    return 2*i+2
   }
   getParentIndx(i){
    return Math.floor((i-1)/2)
   }

   insert(val){
    this.heap.push(val)
    let lastIndex=this.heap.length-1

    this.heapifyUp(lastIndex)
   }
   heapifyUp(index){
    while(index>0){
        let parentIndex=this.getParentIndx(index)
        if(this.heap[parentIndex]>this.heap[index]){
            [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
            index=parentIndex
        }
        else{
            break
        }

        }
   }

   extract(){
    if(this.heap.length<1) return null

    let min=this.heap[0]
    let lastIndex=this.heap.length-1;

    [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]]
    this.heap.pop()
    this.heapifyDown(0)


    return min

}

heapifyDown(i)
{

    let left=this.getleftChildIndx(i)
    let right=this.getrightChildIndx(i)

    let smallest=i
    let n=this.heap.length

    if(left<n && this.heap[left]<this.heap[smallest]){
        smallest=left
    }
      if(right<n && this.heap[right]<this.heap[smallest]){
        smallest=right
    }

    if(smallest!==i){
        [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]]
        this.heapifyDown(smallest)
    }


}
peek(){
    if(!this.heap.length) return null
    return this.heap[0]
}
}

let heap=new MinHeap()
heap.insert(1)
console.log(heap.heap) // [ 2, 5, 20, 30, 10 ]
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.heap)
