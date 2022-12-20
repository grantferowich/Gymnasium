/*
 *  Homework - Decrease and Conquer
 *  Utilize the decrease and conquer pattern to solve these problems.
 */

/*
 * Number of Ones
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
 */
// can we assume the elements are only 1 or 0? Yes because the array is a bit array.
// initialize a midpoint counter 
// check if the midpoint is 0 or 1
// if the element at the middle index is 0 
// look right until the first 1 is found
// splice the array from the first 1 until the last index

// cut the array from the middle index + 1 until the array's last index
// set the pointer to the middle index of the array
// if the element at the middle index is 1 
// then look left to find the first 1 
// splice the array from the first 1 until the last index


// multiple pointers 


function numberOfOnes(arr) {
  let startIdx = 0;
  let endIdx = arr.length;
  let middleIdx;

  // check input has 1's
  if (!arr.includes(1)){
    return 0;
  }

  while (startIdx < endIdx){
    middleIdx = parseInt(startIdx + parseInt((endIdx - startIdx) / 2));
    
    // validation check to determine whether to re-assign the startIdx 
    if (arr[middleIdx] === 0){
      startIdx = middleIdx + 1;
      // else re-assign the endIdx
    } else {
      endIdx = middleIdx;
    }
  }
  return arr.length - startIdx; 
}


/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */


// should we assume the integer is not in the array? Yes. That's what the problem says. 
// we can assume a sorted array so BST will work to achieve O(logN) runtime
// initialize a startIdx and endIdx 
// set (array length / 2) as the midpoint of the array
// make sure to take absolute difference between target and value


function closestValue(arr, target) {
  let startIdx = 0;
  let endIdx = arr.length;
  let midIdx;
  let closest = Infinity;
  let value = null;

  // value is the return variable
  // value returns a specific location in the array
  // closest, difference, and value
  
  while (startIdx < endIdx){
    midIdx = parseInt(startIdx + parseInt((endIdx - startIdx)/2));
    let difference = Math.abs(target - arr[midIdx]);
    if (difference < closest){
      closest = difference;
      value = arr[midIdx];
    }
    if (arr[midIdx] < target){
      startIdx = midIdx + 1
    } else {
      endIdx = midIdx - 1;
    }
  }
  
  return value;
}



/*
 * ## Square Root
 *
 * *Given an positive integer, find the square root.*
 *
 * **Parameters**
 * Input: value {Integer}
 * Output: {Float}
 *
 * **Constraints**
 * Do not use a native built in method.
 * Ensure the result is accurate to 6 decimal places (0.000001)
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `4 --> 2.0`
 * `98 --> 9.899495`
 * `14856 --> 121.885192
 * 
 * 
 * // input: 49, 81, 9
 * // output: 7, 9, 3
 * 
 *  [0.000001,1,2,3....49]
 *  24 * 24 = 576 > 49 ||| Case 1: product is greater than N
 * [0.000001, 1, 2, 3, 4....24]
 * 12 * 12 = 144 | Case 1
 * [0.000001, 1, 2, 3...12]
 * 6 * 6 = 36 | Case 2: product is less than N 
 * [6.000001, 7, 8, 9, 10, 11, 12]
 * 9 * 9 = 81 | Case 1: product is greater than N 
 * [6.000001, 7, 8, 9]
 * 
 *
 * Constraints: the solution must have O(logN) runtime
 * Edge cases: is the number is positive? 
 * E: if the number is negative return 0
 * E: is the input a number?
 * E: check to ensure type of input is number
 * 
 * // from 0.000001 to N 
 * check if the number at the midIdx times itself equals N
 * if the product is less than N set set startIdx to midIdx + 0.000001
 * else set the endIdx to midIdx - 0.0000001
 * if the number at midIdx * the number at midIdx === inputNumber return the value4rt
 * 
 */



function squareRoot(N) {


  let startIdx = 0;
  let endIdx = N;
  let midIdx = 0;
  let result = 0;
  let square = 0;

  if (typeof N !== 'number'){
      return false;
  }
  if (N.toString.length === 0){
      return false;
  }

  while (startIdx <= endIdx){
      midIdx = (startIdx+endIdx)/2
      if ((result * result) == N) { return result.toPrecision(6);}
      square = midIdx * midIdx;
      if (square === N){
          return midIdx;
      } else if (square < N){
          startIdx = midIdx + 0.000001
          result = midIdx;
      } else {
          endIdx = midIdx - 0.000001;  
          result = midIdx;
      }
  }

  return result.toPrecision(6)
}



/*
 * ## Greater Values
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
 */ 

// check for the stop condition
// stop loop condition == if the midIdx < target and target < mid + 1
// stop when array[midIdx] <= target <= array[midIdx + 1]
// and return length of array from array[midIdx + 1] to the end of the array with slice

// if the stop condition is not satisfied and the value at midIdx is less than the target 
// increment startIdx to midIdx + 1

// if the stop condition is not satisfied and the value at midIdx is greater than the target value
// decrement endIdx to midIdx - 1

// if the stop condition is not satisfied and the value at midIdx is equal to the target value
// the 

// loop while the following is true: the value at startIdx is less than the target value
// if midIdx is less than target increment startIdx to midIdx + 1  
// if midIdx is greater than target decrement endIdx to midIdx - 1
// if midIdx is equal to the target return the array length from midIdx to the index at the end of the array
// if the pointer at i is less than the target and the value at i+1 is greater than the target
// stop the loop with the pointer set to i + 1


function greaterValues(arr, target) {
 
  let startIdx = 0;
  let endIdx = arr.length -1;

  while (startIdx < endIdx){
    let midIdx = startIdx + parseInt((endIdx - startIdx) / 2);
    // console.log('midIdx', midIdx);
    if (arr[midIdx] <= target){
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1
    }
  }

  return arr.length - midIdx
}



/*
 * ## Sorted and Rotated Array [Extra Credit]
 * *Given an array with distinct values that is sorted and rotated, find out if a target value exists in the array.*
 *
 * A sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
 *
 * `[3, 4, 5, 1, 2]` is rotated left by 2.
 * `[99, 14, 25, 78, 93]` is rotated to the right by 1.
 *
 * **Parameters**
 * Input: arr {Array}
 * Output: {Boolean}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1) /// this seems wrong since the array may grow, input complexity grows, total space complexity grows
 *
 * **Examples**
 * `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true`
 * `[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false`
 * `[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true`
 * 
 * 
 * Inputs: array, target 
 * Output: boolean
 * Constraints: O(logn) ==> must use BS
 * Space: O(N)
 * Edge cases: Return false if the input array is empty
 * 
 * // Binary search only works on sorted arrays
 * // the given arrays are rotated 
 * // insight: un-rotate the array to enable use of BS
 * // rotating left takes the largest
 * 
 * Test case: Left rotated
 * 
 *  [3, 4, 5, 1, 2] is rotated left by 2.
 * 
 *  // rotating left means taking N elements and appending them to the front
 * 
 * 
 * rotating left means 
 * 
 * Test case: Right rotated  
 * 
 * [99, 14, 25, 78, 93] is rotated to the right by 1. 
 * 
 * rotating right means taking N elements from end and moving them to the front
 *  
 * Could there be a case in which the right rotation and left rotation produce the same array? 
 * [ 3, 4, 5, 1, 2]
 * 
 * 
 * 
 */


// 


function rotatedArraySearch(nums, target) {
  let startIdx = 0;
  let endIdx = nums.length;
  let midIdx;

  while (startIdx <= endIdx){

    midIdx = startIdx + parseInt((startIdx + endIdx)/2);
    
    if (target === nums[midIdx]){
      return true;
    }
    //left array sorted
    if (nums[startIdx] < nums[midIdx]){
      if (target >= nums[startIdx] && target < nums[midIdx]){
        endIdx = midIdx - 1;
      } else {
        startIdx = midIdx + 1;
      }
    // right array sorted
    } else {
      if (target > nums[midIdx] && target <= nums[endIdx]){
        startIdx = midIdx + 1;
      } else {
        endIdx = midIdx - 1;
      }
    }
  }
  return false;
}


/*
 * ## Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `487, 734 --> 357458`
 * `846, 908--> 768168`
 */

function  multiplicationRussianPeasant(a, b) {

}



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


let testCount;

console.log('Number of Ones Tests');
testCount = [0, 0];

assert(testCount, 'should return correct number of ones for array with zeroes and ones', () => {
  let example = numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
  return example !== undefined && example === 8;
});

assert(testCount, 'should return correct number of ones for array with all zeroes', () => {
  let example = numberOfOnes([0, 0, 0]);
  return example !== undefined && example === 0;
});

assert(testCount, 'should return correct number of ones for array with all ones', () => {
  let example = numberOfOnes([1, 1, 1]);
  return example !== undefined && example === 3;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Closest Value Tests');
testCount = [0, 0];

assert(testCount, 'should return correct closest value for number in the middle range', () => {
  let example = closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6);
  return example !== undefined && example === 5;
});

assert(testCount, 'should return closest value for highest number', () => {
  let example = closestValue([1, 2, 3], 8);
  return example !== undefined && example === 3;
});

assert(testCount, 'should return closest value for lowest number', () => {
  let example = closestValue([-2, -1, 0], -5);
  return example !== undefined && example === -2;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Square Root Tests');
testCount = [0, 0];

assert(testCount, 'should return correct square root for number < 10', () => {
  let example = squareRoot(4);
  return example !== undefined && example === 2.0;
});

assert(testCount, 'should return correct square root for number between 10 and 100', () => {
  let example = squareRoot(98);
  return example !== undefined && parseFloat(example) === 9.899495;
});

assert(testCount, 'should return correct square root for number over 10,000', () => {
  let example = squareRoot(14856);
  return example !== undefined && parseFloat(example) === 121.885192;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Greater Values Tests');
testCount = [0, 0];

assert(testCount, 'should return greater values for number in the middle of the array', () => {
  let example = greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5);
  return example !== undefined && example === 4;
});

assert(testCount, 'should return 0 for number greater than largest in the array', () => {
  let example = greaterValues([1, 2, 3], 4);
  return example !== undefined && example === 0;
});

assert(testCount, 'should return greater values for number less than least in the array', () => {
  let example = greaterValues([1, 10, 22, 59, 67, 72, 100], -2);
  return example !== undefined && example === 7;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Rotated Sorted Array Tests');
testCount = [0, 0];

assert(testCount, 'returns true when target is in the array', () => {
  let example = rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 46);
  return example !== undefined && example === true;
});

assert(testCount, 'returns false when target is not in the array', () => {
  let example = rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 47);
  return example !== undefined && example === false;
});

assert(testCount, 'returns true when target is the first number in the array', () => {
  let example = rotatedArraySearch([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 7);
  return example !== undefined && example === true;
});

assert(testCount, 'returns true when target is the last number in the array', () => {
  let example = rotatedArraySearch([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 6);
  return example !== undefined && example === true;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Multiplication Russian Tests');
testCount = [0, 0];

assert(testCount, 'returns correct value for two integers', () => {
  let example = multiplicationRussianPeasant(487,734);
  return example !== undefined && example === 357458;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
  let record = [];
  const log = console.log;
  console.log = (...args) => {
    record = record.concat(...args);
  };
  method(...params);
  console.log = log;
  return record;
}

// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}



// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
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
