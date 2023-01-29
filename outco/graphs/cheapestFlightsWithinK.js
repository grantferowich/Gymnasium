/* 
787. Cheapest Flights Within K Stops
Medium
https://leetcode.com/problems/cheapest-flights-within-k-stops/
There are n cities connected by some number of flights. 
You are given an array flights where 
flights[i] = [fromi, toi, pricei] indicates that there is a 
flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, 
return the cheapest price from src to dst with at most k stops. 
If there is no such route, return -1.






function dijkstra(graph, start, end) {
  const distances = new Map();

  const visited = new Set();
  const previous = new Map();
  const queue = new PriorityQueue();

  for (const vertex of graph.getVertices()) {
    distances.set(vertex, Infinity);
    previous.set(vertex, null);
  }

  distances.set(start, 0);
  queue.enqueue([start, 0]);

  // same as bfs 
  while (!queue.isEmpty()) {
    // grab the value and distance as a tuple 
    const [current, distance] = queue.dequeue();
    visited.add(current);

    // look at the current neighbors
    // ignore the neighbors which were already visited 
    for (const neighbor of graph.getNeighbors(current)) {
      if (visited.has(neighbor)) {
        continue;
      }

      // check the available roubts
      // if the distance associated with the presently examined route
      // is smaller than the other available distances
      // do stuff
      const newDistance = distance + graph.getWeight(current, neighbor);
      if (newDistance < distances.get(neighbor)) {
        distances.set(neighbor, newDistance);
        previous.set(neighbor, current);
        queue.enqueue([neighbor, newDistance]);
      }
    }
  }

  let path = [end];
  let previousVertex = previous.get(end);
  while (previousVertex) {
    path.unshift(previousVertex);
    previousVertex = previous.get(previousVertex);
  }

  return {
    distance: distances.get(end),
    path
  };
}

*/