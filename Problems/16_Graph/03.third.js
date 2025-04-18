removeEdge(vertex1,vertex2){
  this.adjacencyList[vertex1].delete(vertex2);
  this.adjacencyList[vertex2].delete(vertex1);
}

removeVertex(vertex){
  if(!this.adjacencyList[vertex]){
    return;
  }
  for( let adjacencyVertex of this.adjacencyList[vertex]{
    removeEdge(vertex, adjacencyVertex);
  }
  delete this.adjacencyList[vertex];
}
