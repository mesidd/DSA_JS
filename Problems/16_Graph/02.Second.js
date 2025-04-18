class Graph {
  constructor(){
    this.adjacencyList = new Set();
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1);
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1,vertex2){
    return ( this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].had(vertex1) )
  }
  display(){
    for(let vertex in this.adjacencyList){
      // console.log(vertex + " => " + [...this.adjacencyList[vertex]].join(', '));
      console.log(vertex + " => " + [...this.adjacencyList[vertex]]);      
    }
  }
}
