// Minimum Maximum

min(root){
  if(!root.left){
    return root.value;
  } else{
    return this.min(root.left);
  }
}

max(root){
  if(!root.right){
    return root.value;
  } else{
    return this.max(root.right);
  }
}
