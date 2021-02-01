// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue{
    constructor(){
        this.fStack = new Stack();
        this.sStack = new Stack();
    }

    add(record){
        this.fStack.push(record);
    }
    remove(){
        while(this.fStack.peek()){
            this.sStack.push(this.fStack.pop());
        }
        const record =  this.sStack.pop();
        while(this.sStack.peek()){
            this.fStack.push(this.sStack.pop());
        }
        return record;
    }

    peek(){
        while(this.fStack.peek()){
            this.sStack.push(this.fStack.pop());
        }
        const record =  this.sStack.peek();
        while(this.sStack.peek()){
            this.fStack.push(this.sStack.pop());
        }
        return record;
    }
}

module.exports = Queue;