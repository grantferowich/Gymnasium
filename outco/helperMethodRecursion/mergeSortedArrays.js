// Merge two sorted arrays
// Perform the merge sort of the two arrays in O(M+N) time
// The brute force solution is to concatenate the arrays and then perform a sort.
// The time complexity of this approach is quasilinear.
// Sorting the combined array has a runtime of O(N+M)log(N+M).

// The approach below uses O(M+N) auxiliary space.
// The approach below has a runtime of O(M+N). 

function mergeSortedArrays(arr1, arr2){
    let merged = [];
    let arrayLength = arr1.length + arr2.length;
  
    const combine = (idx1, idx2) => {
     
      if (merged.length === arrayLength) { return; }

      if (arr1[idx1] < arr2[idx2]){
        merged.push(arr1[idx1]);
        merged.push(arr2[idx2]);
      }

      if (arr1[idx1] > arr2[idx2]){
        merged.push(arr2[idx2]);
        merged.push(arr1[idx1]);
      }

      if (arr1[idx1] === arr2[idx2]){
        merged.push(arr2[idx2]);
        merged.push(arr1[idx1]);
      }

      if (arr1[idx1] === undefined && arr2[idx2]){
        merged.push(arr2[idx2])
      }

      if (arr2[idx2] === undefined && arr1[idx1]){
        merged.push(arr1[idx1])
      }

      // if (arr1[idx1] !== null) {
      //   merged.push(arr1[idx1])
      // }

      // if (arr2[idx2] !== null){
      //   merged.push(arr2[idx2])
      // }

      // merged.sort();

      combine(idx1+1, idx2+1)
    }
  
    combine(0,0,0)
    return merged;
}


// merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
console.log(mergeSortedArrays([1,3,5], [2,4,6,8,10]))
console.log(mergeSortedArrays([1, 4, 7], [2, 3, 6, 9]))


// function merge(arr1, arr2){
//     let merged = [];
//     let maxLength = Math.max(arr1.length, arr2.length)
  
//     const combine = (idx1, idx2, depth) => {
//       if (depth >= maxLength -1) { return }
//       if (arr1[idx1] !== null) {
//         merged.push(arr1[idx1])
//       }
//       if (arr2[idx2] !== null){
//         merged.push(arr2[idx2])
//       }
//       merged.sort();
//       combine(idx1+1, idx2+1, depth + 1)
//     }
  
//     combine(0,0,0)
//     return merged;
// }



// function mergeSortedArrays2(arr1, arr2){
//   let merged = [];
//   let arrayLength = arr1.length + arr2.length;

//   const combine = (idx1, idx2, depth) => {
   
//     if (merged.length === arrayLength) { return; }

//     if (arr1[idx1] < arr2[idx2]){
//       merged.push(arr1[idx1]);
//       merged.push(arr2[idx2]);
//     }

//     if (arr1[idx1] > arr2[idx2]){
//       merged.push(arr2[idx2]);
//       merged.push(arr1[idx1]);
//     }

//     if (arr1[idx1] === arr2[idx2]){
//       merged.push(arr2[idx2]);
//       merged.push(arr1[idx1]);
//     }

//     if (arr1[idx1] === undefined && arr2[idx2]){
//       merged.push(arr2[idx2])
//     }

//     if (arr2[idx2] === undefined && arr1[idx1]){
//       merged.push(arr1[idx1])
//     }

//     // if (arr1[idx1] !== null) {
//     //   merged.push(arr1[idx1])
//     // }

//     // if (arr2[idx2] !== null){
//     //   merged.push(arr2[idx2])
//     // }

//     // merged.sort();

//     combine(idx1+1, idx2+1, depth + 1)
//   }
//   combine(0,0,0)
//   return merged;
// }
