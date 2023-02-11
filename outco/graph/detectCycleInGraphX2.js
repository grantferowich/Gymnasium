function detectCycleInGraph(edgeList) {
  if (edgeList.length < 3) {
    return false;
  }

  const stack = [];
  const visited = {};
  const ancestors = {};

  const getNeighbors = (element, edgeList) => {
    const neighbors = [];
    for (let i = 0; i < edgeList.length; i++) {
      if (edgeList[i][0] === element) {
        neighbors.push(edgeList[i][1]);
      }
    }
    return neighbors;
  };

  for (let i = 0; i < edgeList.length; i++) {
    const start = edgeList[i][0];
    if (visited[start]) {
      continue;
    }
    stack.push(start);
    ancestors[start] = true;

    while (stack.length > 0) {
      const top = stack[stack.length - 1];

      if (visited[top] === "post") {
        const v = stack.pop();
        delete ancestors[v];
      }

      if (visited[top] === "pre") {
        const neighbors = getNeighbors(top, edgeList);
        if (neighbors.length > 0) {
          ancestors[top] = true;
        }
        for (let j = 0; j < neighbors.length; j++) {
          if (ancestors[neighbors[j]]) {
            return true;
          }
          if (!visited[neighbors[j]]) {
            stack.push(neighbors[j]);
            visited[neighbors[j]] = "pre";
          }
        }
      }

      visited[top] = "post";
    }
  }

  return false;
}


  
  let input1 = [[1, 2], [2, 1], [2, 3], [3, 2], [3, 1], [1, 3]]
console.log(detectCycleInGraph(input1)) // true

let input2 = [[1, 2], [2, 1], [1, 3], 
              [3, 1], [3, 4], [4, 3],
              [4, 5], [5, 4], [5, 6], 
              [6, 5], [4, 7], [7, 4]]

console.log(detectCycleInGraph(input2)) // false