
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
        console.log(element);
       }
      }
    }
  
    isValid(i, j) {
      for (let row = 0; row < this.m; row++){
        for (let element = 0; element < this.n; element++){
          if (row === i && element === j){
            return true;
          }
        }
      }
      return false
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
      let output = [];
      for (let row = 0; row < this.m; row++){
        for (let element = 0; element < this.n; element++){
            output.push(this.storage[row][element])
          }
      }
      return output;
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
  
    transpose() {
      let newMatrix = new Matrix(this.n, this.m);
      for (let x = 0; x < this.m; x++){
        for (let y = 0; y < this.n; y++){
            let element = this.retrieve(x,y);
            newMatrix.insert(y, x, element);
        }
      }
      return newMatrix
    }
  
    multiply(matrix) {
      if(this.n !== matrix.m) {
      return null;
      }
    let newMatrix = new Matrix(this.m, matrix.n);
    for(let i = 0; i < newMatrix.m; i++) {
      for(let j = 0; j < newMatrix.n; j++) {
        let newVal = 0;
        for (let k = 0; k < this.n; k++) {
          newVal += this.retrieve(i, k) * matrix.retrieve(k, j);
        }
        newMatrix.insert(i, j, newVal);
      }
    }

    return newMatrix;
    }
  }

let matrix = new Matrix(2,3);
matrix.print()
console.log(matrix.transpose())

let matrixX = new Matrix(1, 1);
let matrixY = new Matrix(1, 1);
matrixX.initialize([[4, 1, 3],
    [3, 2, 5]]);

matrixY.initialize([[8, 9],
    [7, 10],
    [0, 6]]);

console.log(matrixX.multiply(matrixY))
// [39, 64]
// [34, 77]