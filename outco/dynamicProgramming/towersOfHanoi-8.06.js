/* 
Towers of Hanoi

CTCI 8.06

In the classic problem of the Towers of Hanoi, you have
three towers and N disks of different sizes which can slide 
onto any tower. The puzzle starts with disks sorted in ascending 
order of size from top to bottom (i.e. each disk sits on top of
an even larger one.)

You have the following constraints: 
1. Only one disk can be moved at a time.
2. A disk is slid off the top of one tower onto another tower.
3. A disk cannot be placed on top of a smaller disk.

Write a program to move the disks from the first tower to the last
using stacks.

Test case: 
N = 2 
Start = []
Middle = []
End = []

move the top disk at start to the middle tower, 
move the next disk at start to the end tower,
move the disk at the middle tower to the end tower

N = 3 
Start = []
Middle = []
End = []

move the disk at the top to the middle 
continue doing this until 

*/

const towersOfHanoi = (N, start, middle, end) =>{
    let array = []
    const moveDiscs = (N, start, middle, end) => {
        if (N > 0){
        moveDiscs(N - 1, start, middle, end)
        array.push(`moving disk ${N} from ${start} to ${end}`)
        // console.log()
        moveDiscs(N - 1, middle, end, start)
        }
    }
    moveDiscs(N, start, middle, end)
    return array
}

let test0 = towersOfHanoi(2, 'start', 'middle', 'end')
console.log('Test 0: ', test0)

let test1 = towersOfHanoi(3, 'start', 'middle', 'end')
console.log('Test 1: ', test1)