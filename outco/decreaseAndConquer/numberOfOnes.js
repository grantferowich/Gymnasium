// const sumArray = (array) => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++){
//       sum += array[i];
//     }
//     return console.log(sum);
// }

// function numberOfOnes(arr) {
//     let startIdx = 0;
//     let endIdx = arr.length - 1;
    
//     while (startIdx < endIdx){
//       let middleIdx = Math.floor((startIdx + endIdx) / 2);
//       if (arr[middleIdx] === 1){
//           endIdx = middleIdx + 1;
//       } 

//       if (arr[middleIdx] === 0){
//         startIdx = middleIdx - 1;
//       }

//       if (arr[middleIdx-1] === 0 && arr[middleIdx] === 1){
//         arr.slice(middleIdx);
//         return sumArray(arr);
//       }
//     }  
// }



const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return console.log(sum);
  }
  
  function numberOfOnes(arr) {
    let startIdx = 0;
    let endIdx = arr.length - 1;

    if (!arr.includes(1)){
        return 0;
      }
  
    while (startIdx < endIdx){
      let middleIdx = Math.floor((startIdx + endIdx) / 2);
      
      if (arr[middleIdx] === 1){
        endIdx = middleIdx + 1;
      }
  
      if (arr[middleIdx] === 0){
        startIdx = middleIdx - 1;
      }
  
      if (arr[middleIdx - 1] === 0 && arr[middleIdx] === 1){
        arr.slice(middleIdx);
        return sumArray(arr);
      }
    }
}


numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1])  // 8
numberOfOnes([0, 0, 0]) // 0