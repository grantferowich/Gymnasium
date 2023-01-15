// Merge two sorted arrays
// Perform the merge sort of the two arrays in O(M+N) time
// The brute force solution is to concatenate the arrays and then perform a sort.
// The time complexity of this approach is quasilinear.
// Sorting the combined array has a runtime of O(N+M)log(N+M).

// The approach below uses O(M+N) auxiliary space.
// The approach below has a runtime of O(M+N). 



function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  // loop over both input arrays
  while (i < arr1.length && j < arr2.length) {
    // the array featuring a smaller element in the 0th place
    // will be the array the new result array draws on for its 0th element
    // push the element from arr1 if that element is smaller
      if (arr1[i] <= arr2[j]) {
          merged.push(arr1[i]);
          i++;
      } else {
          // push the element from arr2 if the element from arr1 is NOT smaller
          merged.push(arr2[j]);
          j++;
      }
  }

  // suppose arr2 is 3 elements and arr1 is 5, 
  // i will be at 3
  // arr.length would be 5
  // append the rest of the arr1 elements to the result array
  while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
  }


  // when arr2 is the longer array
  // loop over arr2's elements
  // appending them to the result array
  while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
  }

  // return result
  return merged;
}



// merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
console.log(mergeSortedArrays([1,2,3,4,5], [6,8,10])) // [ 1, 2, 3, 4, 5, 6, 8, 10]
console.log(mergeSortedArrays([1,4,5,7], [2, 3,5,6,9])) // [ 1, 2, 3, 4, 5, 5, 6, 7, 9]


