class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Enqueue an item
    enqueue(val, priority) {
        this.heap.push({ val, priority });
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndx = Math.floor((index - 1) / 2);

            // CHANGED: Break if the current priority is GREATER OR EQUAL to the parent
            // We want smaller values at the top
            if (
                this.heap[index].priority >=
                this.heap[parentIndx].priority
            ) {
                break;
            }

            this.swap(index, parentIndx);
            index = parentIndx;
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }

        return min;
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let smallest = index; // CHANGED variable name from largest to smallest for clarity

            let left = 2 * index + 1;
            let right = 2 * index + 2;

            // CHANGED: Look for a LESSER priority than the current smallest
            if (
                left < length &&
                this.heap[left].priority < this.heap[smallest].priority
            ) {
                smallest = left;
            }

            // CHANGED: Look for a LESSER priority than the current smallest
            if (
                right < length &&
                this.heap[right].priority < this.heap[smallest].priority
            ) {
                smallest = right;
            }

            // No smaller child found
            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // FIXED: Corrected assignment so the swap works flawlessly in JavaScript
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    // Helper method to easily check size in loops
    size() {
        return this.heap.length;
    }
}


function kthLargestELem(arr,k){
 let heap=new MinPriorityQueue()

 for(let i=0;i<arr.length;i++){
    heap.enqueue(arr[i],arr[i])
    if(heap.size()>k){
        heap.dequeue()
    }

    
 }
 return heap.peek()
}

console.log(kthLargestELem([1,2,3,4,5,6],3))
