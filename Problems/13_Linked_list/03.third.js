class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    return this.size;
  }
  prepend(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    } else{
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront(){
    if(this.isEmpty()){
      console.log("Empty list");
    } else {
      let curr = this.head;
      this.head = curr.next;
      curr.next = null;
    }
    this.size--;
  }
  removeFromEnd(){
    if(this.isEmpty()){
      return null;
    } 
    
    if(this.size === 1){
      this.head = null;
      this.tail = null;
    }else{
      let prev = this.head;
      while(prev.next !== this.tail){
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
  }
  print(){
    if(this.isEmpty()) {
      console.log("Empty");
    } else {
      let current = this.head;
      let listValue = '';
      while(current){
        listValue += current.value + ' ';
        current = current.next;
      }
      console.log(listValue);
    }
  }
}
