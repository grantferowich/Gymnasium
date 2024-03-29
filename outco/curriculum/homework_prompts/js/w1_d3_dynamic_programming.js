/*
 *  Homework - Dynamic Programming
 *
 *  Instructions: Dynamic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes call subproblems repeatedly. These repeated
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
 *      					solutions of its subproblems.
 *
 *  Problem: Lattice Paths (Dynamic Programming Approach)
 *
 *  Prompt:    Count the number of unique paths to travel from the top left
 *             to the bottom right of a lattice of squares.
 *
 *             NOTE: You are traveling along the **EDGES** of the lattice
 *
 *  Input:     An integer N (which is the width of the lattice)
 *             An integer M (which is the height of the lattice)
 *
 *  Output:    An integer (which represents the number of unique paths)
 *
 *  Example:   input: 2
 *
 *             (2 x 3 lattice of squares)
 *              __ __ __
 *             |__|__|__|
 *             |__|__|__|
 *
 *             output: 10 (number of unique paths from top left corner to bottom
 *                     right)
 *
 *             Diagram:
 *
 *             1__1__1__1
 *             |  |  |  |
 *             1__2__3__4
 *             |  |  |  |
 *             1__3__6__10
 *
 *  Notes:     What is the time and auxilliary space complexity of your solution?
 *
 *             When moving through the lattice, you can only move either down or
 *             to the right.
 *
 *             You did this problem before with recursion. Try implementing it
 *             now with dynamic programming!
 *
 *  Resources:
 *    1: https://projecteuler.net/problem=15
 *    2: https://en.wikipedia.org/wiki/Lattice_path
 *
 * 
 *  input given as rows, cols 
 * 
 *          rows (-->) 
 *         
 * cols   1 _ 1 _ 1 _ 1
 *  |       
 *  |     1 _ 2 _ 3 _ 4 
 *  v      
 *        1 _ 3 _ 6 _ 10
 *       
 * 
 * 1. Identify factors - row, col
 *    
 * 2. Create a table - see above
 *        what is the smallest version? 0,0.
 *        The starting case is 0,0 where the number of ways to reach 0,0 is 1.
 *        what is the eventual version? 2 rows, 3 cols.
 *        The eventual case are the given coordinates rows x, cols y
 *    
 * 3. Determine formula - 
 *        for coordinates a,b
 *        sum a-1 and b-1 to produce the number of ways to reach a,b
 * 
 * 4. Create the foundation. Create the first row -  
 *       For row 0 -- fill with 1s. specifically, fill n+1 columns with 1s. 
 * 
 * 5. Fill out the rest of the table.
 *        Loop over 0 to column times (0 3)
 *               
 *            paths(0,0) = 1
 *            paths(0,1) = 1
 *            paths(1,0) = 1 = paths(0,0) + paths(0,-1) = 1 + 0
 *            paths(2,0) = 1 
 *            paths(0,2) = 1
 *            paths(0,3) = 1
 *            paths(1,1) = paths(0,1) + paths(1,0) = 1 + 1 = 2
 *            paths(2,1) = paths(0,2) + paths(1,1) = 1 + 2 = 3
 *            paths(1,2) = paths(1,1) + paths(2,0) = 2 + 1 = 3
 *            paths(2,2) = paths(2,1) + paths(1,2) = 3 + 3 = 6
 */
// Tabulation
  // Time Complexity: O(XY)
  // Auxiliary Space Complexity: O(1)
function latticePaths(x, y) {
    let table = new Array(y+1).fill(1);
    for (let j = 0; j < x; j++){
      for ( i = 0; i < y + 1; i++){
          table[j][i] = table[j-1][i] + table[j][i-1];
      }
    }
    return table[x][y];
}

const latticePathsWithMemoization = (m,n) => {
  let cache = {}
  const traverse = (row, col) => {
    let key = row.toString() +"_"+col.toString();
    if (row === 0 && col === 0){
      return 1;
    }
    if (row < 0 || col < 0){
      return 0;
    }
    if (cache[key]){ return }
    let up = traverse(row - 1, col)
    let left = traverse(row, col - 1)
    cache[key] = up + left;
    return cache[key];
  }
  return traverse(m,n)
}







 ////////////////////////////////////////////////////////////
 ///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
 ////////////////////////////////////////////////////////////

 // code for capturing console.log output
 let record = [];
 (function () {
   let log = console.log;
   console.log = function () {
     record = record.concat(Array.prototype.slice.call(arguments));
     log.apply(this, Array.prototype.slice.call(arguments));
   };
 }());

 console.log('Lattice Paths Tests');
 let testCount = [0, 0];

 assert(testCount, 'should work for a 2 x 3 lattice', () => {
   let example = latticePaths(2, 3);
   return example === 10;
 });

 assert(testCount, 'should return the same for a 3 x 2 lattice', () => {
   let example = latticePaths(3, 2);
   return example === 10;
 });

 assert(testCount, 'should work for a 0 x 0 lattice', () => {
   let example = latticePaths(0, 0);
   return example === 1;
 });

 assert(testCount, 'should work for a 10 x 10 lattice (square input)', () => {
   let example = latticePaths(10, 10);
   return example === 184756;
 });

 assert(testCount, 'should work for a 20 x 15 lattice (large input)', () => {
   let example = latticePaths(20, 15);
   return example === 3247943160;
 });

 console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

 // function for checking if arrays are equal
 function arraysEqual(arr1, arr2) {
   if(arr1.length !== arr2.length)
     return false;
   for(let i = arr1.length; i--;) {
     if(arr1[i] !== arr2[i])
       return false;
   }
   return true;
 }

 // function for checking if arrays contain same elements
 // (do not need to be in the same order)
 function arraysMatching(arr1, arr2){
   if (arr1.length !== arr2.length){
     return false;
   } else {
     let lib = {};
     for (let i = 0; i < arr1.length; i++){
       lib[arr1[i]] = true;
     }
     for (let j = 0; j < arr2.length; j++){
       if (lib[arr2[j]] === undefined){
         return false;
       }
     }
     return true;
   }
 }

 // custom assert function to handle tests
 // Array count : keeps track out how many tests pass and how many total
 //   in the form of a two item array i.e., [0, 0]
 // String name : describes the test
 // Function test : performs a set of operations and returns a boolean
 //   indicating if test passed
 function assert(count, name, test){
   if(!count || !Array.isArray(count) || count.length !== 2) {
     count = [0, '*'];
   } else {
     count[1]++;
   }

   let pass = 'false';
   let errMsg = null;
   try {
     if (test()) {
       pass = ' true';
       count[0]++;
     }
   } catch(e) {
     errMsg = e;
   }
   console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
   if (errMsg !== null) {
     console.log('       ' + errMsg + '\n');
   }
 }
