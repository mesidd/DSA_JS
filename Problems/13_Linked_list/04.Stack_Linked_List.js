import LinkedList from '/LinkdedList.js'

class LinkedListStack{
  constructor(){
    this.list = new LinkedList();
  }
  push(value){
    this.list.prepend(value);
  }
  pop(value){
    this.list.pop();
  }
  print(){
    this.list.print();
  }
}
