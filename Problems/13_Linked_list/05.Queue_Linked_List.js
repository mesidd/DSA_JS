import LinkedList from '/'

class LinkedListQueue{
  constructor(){
    this.list = new LinkedList();
  }
  enqueue(value){
    this.list.append(value);
  }
  dequeue(){
    this.list.removeFromFront();
  }
  print(){
    this.list.print();
  }
}
