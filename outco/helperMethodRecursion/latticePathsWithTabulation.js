var t0 = performance.now();

function latticePathsWithTabulation(x, y) {
  
    let table = new Array(x+1).fill(1);


    // i is tracking the state of the y-axis (cols) or "table length"
    for (let i = 0; i < y; i++){
      // j is tracking the state of the x-axis (rows) or "height"
      for (let j = 0; j < x + 1; j++){
          if (j > 0)
          table[j] = table[j] + table[j-1];
      }
    }
    // console.log('table: ', table)
    return table[x]
}

console.log(latticePathsWithTabulation(2,3)) // 10
console.log(latticePathsWithTabulation(30,30)) // something really, really big

var t1 = performance.now();
console.log("Call to latticePathsWithTabulation took " + (t1 - t0) + " milliseconds.");