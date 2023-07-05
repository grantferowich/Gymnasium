/* 
Final all paths

Successfully tested the function on July 5, 2023.

2. Find all paths
2. Given a starting vertex, and a string destination, return all valid paths for a given source and destination.

Input:
{Vertex} origin - the starting vertex
{Integer} destination - integer value of the destination vertex

Output:
{String Array} result - a sorted array of all paths 
from the origin to the destination

 

INPUT: 
              C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G

Origin: (A)

Destination: D

OUTPUT: 

["ABCEFD", "ABCEGFD", "ABHEFD", "ABHEGFD"]

EXPLANATION: 

There are four paths from vertex A to vertex D. 
These four paths are listed above and then sorted within their array. 

*/

function find_all_paths(origin, destination) {
    let pathsArr = [];
    let visitedSet = new Set();
    let buildArr = []
    const traverse = (vertex) => {
        buildArr.push(vertex.id)
        if (visitedSet.has(vertex)){
            return 
        }

        if (vertex.id === destination){
            pathsArr.push(buildArr.join(''))
            buildArr.pop()
            return
        }
        
        visitedSet.add(vertex);
        let neighborsArr = vertex.edges;
        let xInt = 0;
        while (neighborsArr !== undefined && xInt < neighborsArr.length){
            let neighbor = neighborsArr[xInt];
            if (!visitedSet.has(neighbor)){
                traverse(neighbor);
            }
            xInt++;
        }
        buildArr.pop()
        visitedSet.delete(vertex)
    }
    traverse(origin, [origin.id])
    return pathsArr;
}