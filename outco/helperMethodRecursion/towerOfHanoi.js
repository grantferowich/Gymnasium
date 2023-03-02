/**
 * Tower of Hanoi
 * 
 * Successfully tested the function 1/26/23.
 * 
 * The tower of hanoi question gives a number and expects
 * a series of statements about the movement of the discs. 
 * 
 * This question is a recursion question
 * and also this problem is a nested recursion question.
 * 
 * Input: 2
 * Output: Disk 1 moved from A to B
 * Disk 2 moved from A to C
 * Disk 1 moved from B to C
 * 
 * Input: 3
 * Output: Disk 1 moved from A to C
 * Disk 2 moved from A to B
 * Disk 1 moved from C to B
 * Disk 3 moved from A to C
 * Disk 1 moved from B to A
 * Disk 2 moved from B to C
 * Disk 1 moved from A to C
 */ 

const towerOfHanoi = (num, source, auxiliary, target) => {
    moveDiscs = (num, source, auxiliary, target) => {
        if (num > 0){
            moveDiscs(num - 1, source, auxiliary, target)
            console.log(`moving disk ${num} from ${source} to ${target}`)
            moveDiscs(num -1, auxiliary, target, source )
        }
    }
    return moveDiscs(num, source, auxiliary, target)
}

towerOfHanoi(2, 'x', 'y', 'z')
// moving disk 1 from x to z
// moving disk 2 from x to z
// moving disk 1 from y to x