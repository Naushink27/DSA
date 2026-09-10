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
}

let heap=new MinHeap()
heap.insert(1)
console.log(heap.heap) // [ 2, 5, 20, 30, 10 ]