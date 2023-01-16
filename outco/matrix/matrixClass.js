
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
}

let matrix = new Matrix(2,3);
matrix.print()