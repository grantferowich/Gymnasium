/* Number of Ones
* Successfully tested the function 1/10/23.
*
* *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
*
* **Parameters**
* Input: arr {Array of Integers}
* Output: {Integer}
*
* **Constraints**
* Time: O(logN)
* Space: O(1)
*
* **Examples**
* `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
* `[0, 0, 0] --> 0`
* `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
* 
* Complexity Analysis
Time Complexity: O(log(N)). The function continually searches for the 0 before the list of 1s.
Space Complexity: O(1). The state variables are updated, yet, there is not declaration of linear data structures.
*/
const numberOfOnes = (array) => {
    let startIdx = 0;
    let endIdx = array.length;

    if (!array.includes(1)){
        return 0;
    }

    if (array.indexOf(0) === -1){
      return array.length
    }
  
    while (startIdx < endIdx){
      // find mid
      let middleIdx = parseInt(startIdx + parseInt((endIdx - startIdx) / 2));
      
      // if element at the middle spot is zero, look right
      if (array[middleIdx] === 0){
        startIdx = middleIdx + 1;
      } else {
        // otherwise, look left
        endIdx = middleIdx;
      }
    }
    return array.length - startIdx

}

console.log(numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]))   // 8
console.log(numberOfOnes([0, 0, 0])) // 0