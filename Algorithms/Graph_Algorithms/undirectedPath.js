const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
};

//traversal through graph, guarding against infinite loops
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  
  visited.add(src);
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  
  return false
}

//edge list into adjacency list
const buildGraph = (edges) => {
  const graph = {}
  
  for (let edge of edges) {
    const [ a, b ] = edge
    if (!(a in graph)) graph[a] = [];
    if (!(a in graph)) graph[a] = [];
    graph[a].push[b]
    graph[b].push[a]
  }
  
  return graph
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];