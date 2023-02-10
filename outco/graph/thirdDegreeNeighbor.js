function thirdDegreeNeighbors(edgeList, start) {
    let q  = new Queue();
    let visited = {}
    let output = []
    q.enqueue([start, 0])
    visited[start] = true
    const getNeighbors = (element, edgeList) => {
      let neighbors = []
      for (let x = 0; x < edgeList.length; x++){
        if (edgeList[x][0] === element){
          neighbors.push(edgeList[x][1])
        }
      }
      return neighbors
    }
    while (q.length > 0){
      let current = q.dequeue();
      let v = current[0]
      let degree = current[1];
      let neighbors = getNeighbors(v, edgeList)
      if (neighbors.length !== undefined){
        for (let x = 0; x < neighbors.length; x++){
          if (degree === 3){
            output.push([v, neighbors[x]])
          }
          if (!visited[neighbors[x]]){
            q.enqueue([neighbors[x], degree+1]);
            visited[neighbors[x]] = true;
          }
        }
      }
    }
    // console.log(output)
    return output.length > 0 ? output : -1
  }