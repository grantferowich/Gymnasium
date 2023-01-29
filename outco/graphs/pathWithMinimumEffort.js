/* 
input: array of arrays / matrix (like robot paths)
output: a number indicating the maximum difference between 
two cells while traversing from 0,0 to m,n

test case: 1
heights = [[1,2,2],
           [3,8,2],
           [5,3,5]]

output: 2 
path: 1 -> 3 -> 5 -> 3 -> 5

test case: 2
heights = [[1,2,2],
           [3,8,2],
           [5,1,5]]

output: 3
path: 1 -> 2 -> 2 -> 2 -> 5

*/

class Heap {

    constructor(type = 'min') {
      this.type = type || null;
      this.storage =  [];
    }

    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    compare(parent, child) {
     if (this.type === 'min' && this.storage[parent] < this.storage[child]){
       return true;
     }
     if (this.type === 'max' && this.storage[parent] > this.storage[child]){
       return true;
     }
     return false;
    }
    
    // Time Complexity: O(logN)
    // Auxiliary Space Complexity: O(1)
    
    insert(value) {
        this.storage.push(value);
        // when inserting, the value must be bubbled up from the end of the array
        // to satisfy the heap condition
        this.bubbleUp()
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    peek() {
       console.log(this.storage)
      return this.storage[0]
    }

    // Time Complexity: O(log(N))
    // Auxiliary Space Complexity: O(1)
    // Time Complexity: 
    // Auxiliary Space Complexity:
    removePeak() {
     this.swapValues(0, this.storage.length -1)
     const node = this.storage.pop()
     this.bubbleDown()
     return node
    }
   
    swapValues(a,b){
     [this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
    }
   
    getParentIndex(child){
     return Math.floor(( child - 1 ) / 2 );
    }
   
    getChildIndex(parent){
     let left = parent * 2 + 1;
     if (left >= this.storage.length - 1 || this.compare(left, left + 1)){
       return left
     }
     return left + 1;
    }
   
    bubbleUp(){
     let child = this.storage.length - 1;
     let parent = this.getParentIndex(child);
     while (child > 0 && !this.compare(parent , child)){
       this.swapValues(parent, child);
       child = parent;
       parent = this.getParentIndex(child)
     }
    }
   
    bubbleDown(){
     let parent = 0;
     let child = this.getChildIndex(parent);
     while (child < this.storage.length && !this.compare( parent, child )){
       this.swapValues(parent, child);
       parent = child;
       child = this.getChildIndex(child)
     }
    }
}

// store all the values in a path
// then traverse with breadth first search until reaching m,n
// helper method recursion 
// if the difference between two cells 

const pathWithMinimumEffort = (matrix) => {
    let height = matrix.length;
    let width = matrix[0].length;
    const visited = new Set();
    const distances = new Map();
    // distances map: key = x_y string, 
    //                value = matrix[x][y] value
    const priorityQueue = new Heap();
    priorityQueue.insert(matrix[0][0]);




}
