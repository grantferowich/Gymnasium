/* 
Robot in a Grid

CTCI 8.02

Imagine a robot sitting on the upper left corner of a grid with
r rows and c columns. The robot can only move in two directions, right and down,
but certain cells are "off limits" such that the robot cannot step on them. 
Design an algorithm to find a path from the robot from the top left to the bottom right.

Test case: 
rInt = 2
cInt = 2

*/

const robotInAGrid = (rInt = 0, cInt = 0) => {
    if (rInt === 0 && cInt === 0){
        return 0
    }

    // STATE
    // Map<coords, ToF>
    let visitedMap = new Map()
    let pathsInt = 0

    // helper method
    const travel = (rowInt, colInt) => {
        
        // destination case 
        if (rowInt === rInt && colInt === cInt){
            pathsInt++
            return
        }   

        // termination case
        if (rowInt < 0 || rowInt > rInt || colInt < 0 || colInt > cInt || visitedMap.has(`${rowInt}_${colInt}`)){
            return
        }

        // recusive calls
        visitedMap.set(`${rowInt}_${colInt}`, true)
        travel(rowInt + 1, colInt)
        travel(rowInt, colInt + 1)
        visitedMap.delete(`${rowInt}_${colInt}`)
    }

    // invoke helper method 
    travel(0,0)
    return pathsInt
}

/* TESTS */
const rInt0 = null
const cInt0 = null
const result0 = robotInAGrid(rInt0, cInt0)
console.log('Test result 0: ', result0)
// expect 0 ✓

const rInt1 = undefined
const cInt1 = undefined
const result1 = robotInAGrid(rInt1, cInt1)
console.log('Test result 1: ', result1)
// expect 0 ✓

const rInt2 = 2
const cInt2 = 2
const result2 = robotInAGrid(rInt2, cInt2)
console.log('Test result 2: ', result2)
// expect 6 ✓

const rInt3 = 2
const cInt3 = 3
const result3 = robotInAGrid(rInt3, cInt3)
console.log('Test result 3: ', result3)
// Expect 10 ✓