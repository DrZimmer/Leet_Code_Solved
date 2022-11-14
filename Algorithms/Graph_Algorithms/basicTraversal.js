//adjacency list

//iterative
// const depthFirstPrint = (graph, source) => {
//   const stack = [source];
//   //use push, pop

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }
// };

//recursive
// const depthFirstPrint = (graph, source) => {
//   console.log(source);
//   for (let neighbor of graph[source]) {
//     depthFirstPrint(graph, neighbor);
//   }
// };

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
//depth first traversal
// depthFirstPrint(graph, "a");
//breadth first traversal
breadthFirstPrint(graph, "a");
