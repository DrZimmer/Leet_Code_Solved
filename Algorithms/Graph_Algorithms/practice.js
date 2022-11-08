//adjacency list
const depthFirstPrint = (graph, source) => {
  const stack = [source];
  //use push, pop
  
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
//depth first traversal
depthFirstPrint(graph, "a");
//breadth first traversal
