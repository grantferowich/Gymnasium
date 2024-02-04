/*
 * ## Greater Values
 *
 * Successfully tested the solution 1/10/23.
 * 
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 * Diagram
 * Multiple pointer diagram
 * 
 * startIdx 
 * [1, 10, 22, 59, 67, 72, 100]  // initial array
 * [22,59,67,72,100] // array we want 
 *         m            
 * 
 * target: 13
 * expected output: 5
 * terminate loop at midpt = 1 + 1 
 * return array.length - 1  (7 - 1 )
 * 
 * Complexity Analysis
 * Time complexity: O(log(N)). The function cuts the array in half to search for the target.
 * Aux Space analysis: O(1). There are a few state variables declared yet there are no extra linear data structures. 
 */ 

function greaterValues(numsArr, targetInt) {
    if (targetInt > numsArr[numsArr.length-1]){return 0}
    let startIdxInt = 0;
    let endIdxInt = numsArr.length -1;
    let midIdxInt;
    
    while (startIdxInt <= endIdxInt){
        midIdxInt = startIdxInt + parseInt((endIdxInt - startIdxInt) / 2);
      if (numsArr[midIdxInt] <= targetInt){
        startIdxInt = midIdxInt + 1;
      } else {
        endIdxInt = midIdxInt - 1;
      }
    }
    return numsArr.length - midIdxInt;
  }

console.log(greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5)) //  --> 4
console.log(greaterValues([1,2,3], 4)) // => 0
console.log(greaterValues([1, 10, 22, 59, 67, 72, 100], 13)) // => 5

console.log(greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 20)) //  => 11
console.log(greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 60)) //  => 3
console.log(greaterValues([1, 10, 15, 18, 20, 22, 26, 29, 31, 35, 48, 59, 67, 72, 100], 900)) //  => 3