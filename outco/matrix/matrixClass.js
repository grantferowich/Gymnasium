
class Matrix {
    constructor(m, n) {
      this.m = m;
      this.n = n;
      this.storage = [];
      for(let i = 0; i < m; i++) {
        this.storage.push(new Array(n).fill(0));
      }
    }
    print() {
      for (let row = 0; row < this.m; row++){
        for (let element = 0; element < this.n; element++){
            console.log(element)
        }
      }
    }

    isValid(x, y){
        for (let row = 0; row < this.m; row++){
            for (let element = 0; element < this.n; element++){
                if (row === x && element === y){
                    return true
                }
            }
        }
        return false;
    }


  initialize(arrayOfArrays) {
    this.storage = arrayOfArrays;
    this.m = this.storage.length
    this.n = this.storage[0].length
  }

  insert(i, j, val) {
    if (this.isValid(i,j)){
      this.storage[i][j] = val;
      return true;
    }
    return false
  }

  retrieve(i, j) {
    if (this.isValid(i,j)){
      return this.storage[i][j];
    }
    return -Infinity
  }

  scale(factor) {
    for (let row = 0; row < this.m; row++){
      for (let element = 0; element < this.n; element++){
          let scaled = factor * this.retrieve(row, element) 
          this.insert(row, element, scaled)
        }
    }
  }

  fill(val) {
    for (let row = 0; row < this.m; row++){
      for (let element = 0; element < this.n; element++){
          this.insert(row, element, val)
        }
    }
  }

  flatten() {
    let flattened = [];
    for (let row = 0; row < this.m; row++){
      for (let element = 0; element < this.n; element++){
          flattened.push(this.storage[row][element])
        }
    }
    return flattened;
  }

  slice(rowRange, colRange) {    
    let rowMin = Math.max(0, rowRange[0]);
    let rowMax = Math.min(rowRange[1], this.m);
    let colMin = Math.max(0, colRange[0]);
    let colMax = Math.min(colRange[1], this.n);

    let matrix = new Matrix(rowMax - rowMin, colMax - colMin);
    for (let row = rowMin; row < rowMax; row++){
      for (let element = colMin; element < colMax; element++){
        let newEle = this.retrieve(row, element)
        matrix.insert(row - rowMin, element - colMin, newEle)
      }
    }
    return matrix;
  }
}

let matrix = new Matrix(2,3);
matrix.print()