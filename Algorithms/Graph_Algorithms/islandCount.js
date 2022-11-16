const islandCount = (grid) => {
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      explore(grid, r, c); //todo
    }
  }
};

const explore = (grid, r, c) => {};
