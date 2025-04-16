// Custom Stack

const Stack {
  constructor(){
    this.items = []
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    if(this.items.length === 0) return null;
    return this.items.pop();
  }

  peek(){
    return this.items[items.length - 1]
  }

  isEmpty(){
    return ( this.items.length === 0 )
  }

  size(){
    return this.items.length
  }
  
}
