/* Create a 2-D Array 

Successfully tested the method 03/23/2023.

Suppose you want to create the following 2 x 10 array of arrays:
[
  [ '', '', '', '', '', '', '', '', '', '' ],
  [ '', '', '', '', '', '', '', '', '', ''],
]


*/
let gridArr = new Array(2).fill('').map(() => new Array(10).fill(''))
console.log(gridArr) 
// ✓
