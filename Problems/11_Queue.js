// class Queue {
//   constructor(){
//     this.items = []
//   }

//   enqueue(element){
//     this.items.push(element)
//   }

//   dequeue(){
//     if(this.isEmpty()) return "Empty";
//     return this.items.shift()
//   }

//   peek(){
//     if (this.isEmpty()) return null;
//     return this.items[0]
//   }

//   isEmpty(){
//     return this.items.length === 0;
//   }

//   size(){
//     return this.items.length;
//   }

//   print(){
//     console.log(this.items.toString())
//   }
// }

class Queue{
  constructor(){
    this.items = {}
    this.front = 0
    this.rear = 0
  }
  enqueue(element){
    this.items[this.rear] = element
    this.rear++
  }
  dequeue(){
    const item = this.items[this.items.front]
    delete this.items[this.front]
    front++
    return item
  }
  isEmpty(){
    // return (this.items.length === 0) : this is object not array
    return (this.front - this.rear) === 0
  }
  peek(){
    return this.items[this.front]
  }
  size(){
    return this.rear - this.front
  }
  print(){
    for(const value of Object.values(this.items)){
      console.log(value)
    }
  }
}





