function merge(arr1, arr2){
    let merged = [];
    let maxLength = Math.max(arr1.length, arr2.length)
  
    const combine = (idx1, idx2, depth) => {
      if (depth >= maxLength -1) { return }
      if (arr1[idx1] !== null) {
        merged.push(arr1[idx1])
      }
      if (arr2[idx2] !== null){
        merged.push(arr2[idx2])
      }
      merged.sort();
      combine(idx1+1, idx2+1, depth + 1)
    }
  
    combine(0,0,0)
    return merged;
}


// merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
console.log(merge([1, 4, 7], [2, 3, 6, 9]))


function merge(arr1, arr2){
    let merged = [];
    let maxLength = Math.max(arr1.length, arr2.length)
  
    const combine = (idx1, idx2, depth) => {
      if (depth >= maxLength -1) { return }
      if (arr1[idx1] !== null) {
        merged.push(arr1[idx1])
      }
      if (arr2[idx2] !== null){
        merged.push(arr2[idx2])
      }
      merged.sort();
      combine(idx1+1, idx2+1, depth + 1)
    }
  
    combine(0,0,0)
    return merged;
}
