// DFS - Depth Firtst Search

preOrder(root){
  if(root){
    console.log(root.value);
    this.preOrdert(root.left);
    this.preOrder(root.right);
  }
}

inOrder(root){
  if(root){
    this.root(root.left);
    console.log(root.value);
    this.root(root.right);
  }
}

postOrder(value){
  if(root){
    this.root(root.left);
    this.root(root.right);
    console.log(root.value);
  }
}

