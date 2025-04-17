// isFull, isEmpty, enqueue, dequeue, peek, print

class CircularQueue{
  constructor(capacity){
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
  }
  isFull(){
    return this.capacity === this.currentLength;
  }
  isEmpty(){
    return this.currentLength === 0;
  }
  enqueue(element){
    if(!this.isFull()){
      this.items[this.rear + 1] = element;
      this.rear = (this.rear + 1) % this.capacity;
      this.currentLength++;
      if(this.front === -1){
        this.front = this.rear;
      }
    }
  }
  dequeur(){
    if(this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if(this.isEmpty()){
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek(){
    if(this.isEmpty()) return null;
    return this.items[this.front];
  }
  print(){
   if(!this.isEmpty()){
     let i;
     let str = '';
     for(i = this.front; i !== this.rear; i = (i+1) % this.capacity){
       str += this.items[i] + ' ';
     }
     str += this.items[i];
     return str;
   }
  }
}
