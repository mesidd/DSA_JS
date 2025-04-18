delete(value){
  this.root = this.deleteNode(this.root, value)
}

deleteNode(root, value){
  
  if(root === null) return root;
  
  if(value < root.value){
    root.left = this.deleteNode(root.left, value);
  } 
  else if (value > root.value){
    root.right = this.deleteNode(root.right, value);
  } 
  else{
    
    if(!root.left && !root.right){
      this.root = null;
    } 
    else if(root.left === null){
      return root.right;
  } 
    else if(root.right === null){
      return root.left;
  } 
    else{
      let minNode = this.minNode(root.right);
      root.value = minNode;
      root.right = this.deleteNode(root.right, value);
  }
}
  return root;
}
