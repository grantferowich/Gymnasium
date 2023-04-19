/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 * 
 *  init charFrequencyMap<char, frequencyInt>
 *  loop over the array
 *  add chars to the charFrequencyMap 
 *  if the char exists in the map, increment the frequency integer by 1
 * 
 *  loop over each key-value pair in the map
 *  if the frequency/value is greater than 1
 *  append the key to the output array
 */