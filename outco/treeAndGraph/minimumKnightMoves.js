/* 
Minimum Knight Moves

BFS -> Queue
- minimum / short distance

Knight -> can move 8 directions

When do we stop?
    When we reach the target.

visited -> to avoid cycle

No boundary

Input: x integer, y integer
Output: minimum number of steps required from (0,0) to (x,y)



This is all you have to remember in a graph question

Start
push 0,0 to q
While q is not empty
pop q
check if we reached target
explore neighbors
    if neighbors is valid
        - boundary
        - visited
    add neighbor to Q
    add to visited 

*/

const minimumKnightMoves = (xInt, yInt) => {
    
    let visitedSet = new Set();
    let q = [[0,0]]
    let steps = 0

    while (q.length > 0){
        steps++
        let coordsTuple = q.pop()
        if (coordsTuple[0] === xInt && coordsTuple[1] === yInt){
            steps++
            return steps
        }

        
    }
    
}