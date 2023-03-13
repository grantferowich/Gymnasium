/* 
Draw Line
CTCI 5.08

Successfully tested the function 03/13/23.

A monochrome screen is stored as a single array 
of bytes, allowing eight consecutive pixels to be 
stored in one byte.The screen has width w, where w 
is divisible by 8 (that is, no byte will be split 
across two rows.) The height of the screen, of course,
can be derived from the length of the array and the width. 
Implement a function that draws a horizontal line from 
(x1, y) to (x2, y).

Inputs: screen, width, x1, x2, y
output: screen

screen of width 2 = [[0, 0, 0, 0, 0, 0, 0, 0], 
                    [0, 0, 0, 0, 0, 0, 0, 0]]
  x1 = 0
  y = 1
  x2 = 1

screen = [[0, 1, 0, 0, 0, 0, 0, 0], 
          [0, 1, 0, 0, 0, 0, 0, 0]]

*/

const drawLine = ( width, x1, x2, y) => {
   
    let screen = new Array(width)
    for (let x = 0; x < screen.length; x++){
        screen[x] = new Array(8).fill(0)
    }
    for (let row = x1; row < screen.length; row++){
        for (let col = y; col < screen[0].length; col++){
            if (row >= x1 && row <= x2 && col == y){
                screen[row][col] = 1
            }
        }
    }
    return screen
}

/* TESTS */



let data = drawLine(2, 0, 1, 1)
console.log('Test 1:', data)
