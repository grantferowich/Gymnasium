// Successfully tested the function 1/25/23

function bubbleSort(a) {
    var swap;
    var n = a.length - 1;
    var x = a;
    
    do {
      swap = false;
      for (var i = 0; i < n; i++) {
        if (x[i] > x[i + 1]) {
          var temp = x[i];
          x[i] = x[i + 1];
          x[i + 1] = temp;
          swap = true;
        }
      }
      n--;
    } while (swap);
    return x;
  }
  
  console.log(
    bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
  );
  
  // [
//     1,   4,   9,  12,   23,
//     64,  84,  98, 122,  213,
//    234, 345, 455, 546, 3223
//  ]