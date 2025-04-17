class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
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
    } else {
      this.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value){
    if(this.isEmpty()){
      this.head = node;
    }
    let previous = this.head;
    while(previous.next){
      previous = previous.next;
    }
    previous.next = node;
    this.size++;
  }

  insert(value,index){
    if(index<0 || index>this.size) return;
    if(index === 0) this.prepend(value);
    else{
      const node = new Node(value);
      let prev = this.head;
      for( let i = 0 ; i < index - 1; i++ ){
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }
  remove(index){
    if(index<0 || index>=this.size) return null;
    if(index === 0) {
      current = this.head;
      this.head = current.next;
      current.next = null;
    }
    else{
      let previous = this.head;
      for(let i = 0; i < index - 1; i++){
        previous = previous.next;
      }
      let remove = previous.next;
      previous.next = remove.next;
      remove.next = null;
    }
    this.size--;
  }
  
  print(){
    if(this.isEmpty()) console.log("Empty List");
    else {
      let listValue = '';
      let current =  this.head;
      while(current){
        listValue += current.value + ' ';
        current = current.next;
      }
      console.log(listValue);
    }
  }
  
}



