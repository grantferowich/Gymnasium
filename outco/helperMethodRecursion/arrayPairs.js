function arrayPairs(arr) {
    let array = [];
     
    const pair = (depth) => {
      if (depth >= arr.length){ return; }
      array.push( [arr[depth], arr[depth +1]] );
      pair(depth+2);
    }
  
   pair(0);
   return array;
}



console.log(arrayPairs([1, 2, 3, 4, 5, 6])) // => [[1,2], [3,4], [5,6]]
