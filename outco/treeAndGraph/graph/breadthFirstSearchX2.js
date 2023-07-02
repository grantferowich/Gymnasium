/*
 * Complete the 'bfs' function below.
 * Successfully tested the function on July 2, 2023.
 * 
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. Vertex origin
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *
 * current = queue.dequeue
 * loop through current's edges
 *  -> if not visited, enqueue edge
 *  -> add edge to visited
 * add current ID to result
 */

function bfs(originVertex) {
    
    let queueArr = [];
    queueArr.push(originVertex);
    let visitedSet = new Set()
    visitedSet.add(originVertex.id)
    let resultArr = [];
    while (queueArr.length > 0){
        let currentVertex = queueArr.shift()
        resultArr.push(currentVertex.id)
        let neighborsArr = currentVertex.edges
        let xInt = 0
        while (neighborsArr !== undefined && xInt < neighborsArr.length){
            let vertex = neighborsArr[xInt];
            if (!visitedSet.has(vertex.id)){
                queueArr.push(vertex)
                visitedSet.add(vertex.id)
            }
            xInt++
        }      
        
    }
    return resultArr.join('')
}