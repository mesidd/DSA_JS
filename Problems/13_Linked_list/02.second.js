  removeByValue(value){
    if(this.isEmpty()) return null;
    else{
      let curr = this.head;
      for(let i = 0; i < this.size; i++){
        if(curr.value === value){
          curr = curr.next;
          this.remove(i);
          i--;
        }
         else {
          curr = curr.next;
        }
      }
    }
  }

  search(item){
    if(this.isEmpty()) return -1;
    let index = [];
    let curr = this.head;
    for(let i = 0; i < this.size; i++){
      if(curr.value === item)
      {
        index.push(curr);
        // index.push(i);
      }
      curr = curr.next;
    }
    return index.length === 0 ? -1 : index; 
  }

  reverse(){
    let prev = null;
    let curr = this.head;
    while(curr !== null){
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
