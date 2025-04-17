import LinkedList from '/'

class LinkedListQueue{
  constructor(){
    this.list = new LinkedList();
  }
  push(value){
    this.list.append(value);
  }
  pop(){
    this.list.removeFromFront();
  }
  print(){
    this.list.print();
  }
}
