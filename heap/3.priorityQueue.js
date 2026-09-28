//Implementation Using sorting

class PriorityQueue{
    constructor(){
      this.queue=[]
    }

    enqueue(val,priority){
        this.queue.push({val,priority})
        this.queue.sort((a,b)=>b.priority-a.priority) //Highest priority first

    }
    dequeue(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }


}

// const pq=new PriorityQueue()
// pq.enqueue("Enigeer",0)
// pq.enqueue("TEACHER",5)
// pq.enqueue("DOCTOR",3)
// pq.enqueue("BANKER",2)


// console.log(pq.peek())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.peek())
// console.log(pq)


//Above approach is not efficient so for that we use Heap

class MaxPriorityQueue {
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

            // Compare priorities
            if (
                this.heap[index].priority <=
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

        const max = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }

        return max;
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let largest = index;

            let left = 2 * index + 1;
            let right = 2 * index + 2;

            // Compare priorities
            if (
                left < length &&
                this.heap[left].priority > this.heap[largest].priority
            ) {
                largest = left;
            }

            // Compare priorities
            if (
                right < length &&
                this.heap[right].priority > this.heap[largest].priority
            ) {
                largest = right;
            }

            // No larger child
            if (largest === index) {
                break;
            }

            this.swap(index, largest);
            index = largest;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] =
            [this.heap[j], this.heap[i]];
    }
}

const pq1 = new MaxPriorityQueue();

pq1.enqueue("Engineer", 0);
pq1.enqueue("TEACHER", 5);
pq1.enqueue("DOCTOR", 3);
pq1.enqueue("BANKER", 2);

console.log(pq1.peek());
console.log(pq1.dequeue());
console.log(pq1.dequeue());
console.log(pq1.peek());
console.log(pq1);



