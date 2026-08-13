//Implement Queue using Stack

class myQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

   push(x){
    this.stack1.push(x);
   }
   pop(){
    let n = this.stack1.length;
    for (let i = 0; i < n - 1; i++) {
        this.stack2.push(this.stack1.pop());
    }
    let lastElem = this.stack1.pop();

    //moved elements back to stack1
    for (let i = 0; i < n - 1; i++) {
        this.stack1.push(this.stack2.pop());
    }
    return lastElem;
   }

    peek(){
        let n = this.stack1.length;
        for (let i = 0; i < n ; i++) {
            this.stack2.push(this.stack1.pop());
        }
        let firstElem = this.stack2[this.stack2.length - 1];
        // moved elements back to stack1
        for (let i = 0; i < n ; i++) {
            this.stack1.push(this.stack2.pop());
        }
        return firstElem;

    
    
    }
    empty(){
        return this.stack1.length === 0;
    }
}

//Example usage:
const queue = new myQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());
console.log(queue.pop());
queue.push(3);
queue.push(4);
queue.pop();
console.log(queue.peek());

