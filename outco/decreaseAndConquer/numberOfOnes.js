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


// console.log(numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1])) 
console.log(numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]))   // 8
console.log(numberOfOnes([0, 0, 0])) // 0