# What are your 3 strongest technical strengths you will bring to this position?

Should take one minute; minute and a half at most

##### Prompt

Say: "What are your 3 strongest technical strengths you will bring to this position?"

##### Do you hear these things?

- _Identify_: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:

  - Technical Skills (libraries, languages, etc.)
  - Interpersonal Skills

- _Prove_: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario) to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?

- _Close_: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 311 - Graph is a Tree ..?

Given an undirected graph in an adjacency list format (a map of every vertex to a list of all its neighboring vertices), determine whether or not said graph is a tree.

```
Input: Undirected Graph as an Adjacency List (Map<int, int[]>)
Output: Boolean
```

# Example

```
Input:
 {
   0 : [1, 2, 3],
   1 : [0],
   2 : [0],
   3 : [0, 4],
   4 : [3]
 }
```

![GraphIsTree1](http://res.cloudinary.com/outco-io/image/upload/v1520910500/GraphIsTree1.png)

```
Output: True
```

```
Input:
 {
   0 : [1, 2, 3],
   1 : [0, 2],
   2 : [0, 1],
   3 : [0, 4],
   4 : [3]
 }
```

![GraphIsTree2](http://res.cloudinary.com/outco-io/image/upload/c_scale,w_400/v1520910500/GraphIsTree2.png)

```
Output: False // Cycle between 0, 1, 2
```

```
Input:
 {
   0 : [1, 2, 3],
   1 : [0],
   2 : [0],
   3 : [0],
   4 : []
 }
```

![GraphIsTree3](https://imgur.com/a/VDPVh25)

```
Output: False // Island node
```

# Constraints

```
Time Complexity: O(V + E)
Auxiliary Space Complexity: O(V + E)
```

The graph `Vertex` has the following properties:

`value` : an integer

`edges` : a list which contains references to other vertices in the `Graph`

You may assume the values of the vertices will all be unique.

# Solution

An undirected graph is a tree if the following two conditions are met:

- 1. There is no cycle among the vertices

- 2. All of the vertices of the graph are connected

Key Insight: If there is a cycle, a `vertex` will have `2` or more `neighbors` in the `visited` set

To detect a cycle:

- 1. Perform either DFS or BFS through the graph

- 2. For every `vertex` in the graph, count the number of neighbors present in the `visited` set

  - a) If there are `1` or fewer, continue your BFS or DFS

    - There will always be at least `1` unless you're at the start node since that represents the node you just came from

  - b) If there are `2` or more return `false`, since that means there is a cycle

- 3. If we search through the entire `Graph` and do not return `false`, then we know there is no cycle and can return `true`

To detect connectivity:

- 1. Perform either DFS or BFS through the graph starting at any vertex

- 2. Check to see whether all the vertices are reachable

- 3. If we can reach every vertex then we know the graph is connected and can return `true`, otherwise return `false`

```javascript
// Javascript Solution

function graphIsATree(graph) {
	// Edge case check if graph empty
	if (Object.keys(graph).length == 0) {
		return true;
	}

	let hasCycle = false;

	// Create visited set for DFS
	let visited = new Set();
	function dfs(node) {
		// add node to visited set
		visited.add(node);

		// iterate neighbors, check if >= 2 alr visited
		let visitCnt = 0;
		for (const neighbor of graph[node]) {
			// Is neighbor a cycle to itself
			if (neighbor === node) {
				hasCycle = true;
				return;
			}

			if (visited.has(neighbor)) {
				visitCnt++;
			}
			// Cycle b/c visiting > 1 time, terminate dfs
			if (visitCnt >= 2) {
				hasCycle = true;
				return;
			}
		}

		// no cycle (yet) proceed dfs on neighbors
		for (const neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				dfs(neighbor);
			}
		}
	}

	// DFS from any node, checking for cycle
	dfs(Number(Object.keys(graph)[0]));

	// After DFS, check if visited has all nodes in graph
	const allVisited = visited.size == Object.keys(graph).length;

	return !hasCycle && allVisited;
}

// No cycle, all nodes connected
let adjLst1 = {
	0: [1, 2, 3],
	1: [0],
	2: [0],
	3: [0, 4],
	4: [3],
};

// Cycle (between 0, 1, 2)
let adjLst2 = {
	0: [1, 2, 3],
	1: [0, 2],
	2: [0, 1],
	3: [0, 4],
	4: [3],
};

// Disconnected node (5)
let adjLst3 = {
	0: [1, 2, 3],
	1: [0],
	2: [0],
	3: [0, 4],
	4: [3],
	5: [],
};

// Self cycle (0 <--> 0)
let adjLst4 = {
	0: [0],
};

let adjLst5 = {};

console.log(graphIsATree(adjLst1)); // true
console.log(graphIsATree(adjLst2)); // false
console.log(graphIsATree(adjLst3)); // false
console.log(graphIsATree(adjLst4)); // false
console.log(graphIsATree(adjLst5)); // true
```

# Resources

[Check if Graph is Tree](http://quiz.geeksforgeeks.org/check-given-graph-tree/)
