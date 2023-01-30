class Graph {
    constructor() {
     this.vertices = {};
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // add vertex is basically add a key to a hash map
    addVertex(id) {
        if (this.vertices[id]) { return false; }
        this.vertices[id] = [];
        return true;
    }
   
    // Time Complexity: O(V+E)
    // Auxiliary Space Complexity: O(1)
    // remove vertex is basically remove a key from a hash map
    removeVertex(id) {
          // vertex already exists
     if (!this.vertices[id]){ return false; }
     for (let vertex in this.vertices){
        let edges = this.vertices[vertex];
        let index = edges.indexOf(id);
        if (index >= 0){
            edges.splice(index, 1)
        }
     }
     delete this.vertices[id];
     return true;
    }
   
    // Time Complexity: O(E)
    // Auxiliary Space Complexity: O(1)
    // add edge is basically add a value to the hash map
    addEdge(id1, id2) {
        let vertexList = [];
        let index1;
        let index2;
        for (let vertex in this.vertices){
          vertexList.push(vertex);
        }
        if (id1){
            index1 = vertexList.indexOf(id1.toString());
        } else {
            return -1
        }
        if (id2){
            index2 = vertexList.indexOf(id2.toString()); 
        } else {
            return -2
        }
        
        if (parseInt(index1) === -1 || parseInt(index2) === -1){ return false; }
        this.vertices[id1].push(id2);
        return true;
     }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // remove edge is basically delete values from the hash map
    removeEdge(id1, id2) {
        if (this.vertices[id1]){
            let edges = this.vertices[id1];
            let index = edges.indexOf(id2);
            edges.splice(index,1)
            return true;
          }
          return false;
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(1)
    // access to return boolean if key exists
    isVertex(id) {
      if (this.vertices[id]){
        return true;
      }
      return false;
    }
   
    // Time Complexity: O(1)
    // Auxiliary Space Complexity: O(E)
    // access to return the values given a key
    neighbors(id) {
        if (!this.vertices[id]){return null;}
        return this.vertices[id]
    }
}

// helper method
// input: an array of pairs
// output: a graph
const generateAdjacencyList = (edges) => {
    let graphX = new Graph();
    let x = 0;
    while (x < graphX.length){
        let edge = graphX[x];
        if (!graphX.vertices[edge[0]]){
            graphX.addVertex(edge[0])
        }
        if (!graphX.vertices[edge[1]]){
            graphX.addVertex(edge[1])
        }  
        graphX.addEdge(edge[0] ,edge[1]);
        graphX.addEdge(edge[1], edge[0])
        x++
    }
    return graphX.vertices
}



class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    addToTail(value){
        let node = new ListNode(value);

        // if this.tail is null then the linked list must not be populated
        if (this.tail === null){
            this.head = node;
            this.tail = node;
        } else {
            // set the tail to be the new node 
            this.tail.next = node;
            this.tail = node;  
        }
        this.length++
        return;
    } 

    removeFirstNode(){
        if (this.head === null){
            return
        }
        let root = this.head;
        this.head = this.head.next;
        this.length--;
        return root;
    }
}

const ll2 = new LinkedList();
let j = new ListNode(2)




class Queue {
    constructor(){
        // instantiate a queue as an instance of a linked list
        this.linkedlist = new LinkedList();
    }

    enqueue(value){
        //add element to end of linked list
        this.linkedlist.addToTail(value);
    }

    dequeue(){
        // remove element from end of linked list
        let firstElement = this.linkedlist.removeFirstNode();
        this.length--;
        if (firstElement){
            return firstElement.value;
        } else {
            return null;
        }
    }
    contains(x){
        let current = this.linkedlist.head
        while (current){
            if (current.value === x){
                return true
            }
            current = current.next
        }
        return false
    }
}

let x = new Queue()
x.enqueue(1)
x.enqueue(1)
x.enqueue(2)
x.enqueue(3)
console.log(x)
console.log(x.contains(3)) // true

// const shortestRouteBFS2 = (edges, start, destination) => {
//     const graph = generateAdjacencyList(edges)
    
//     const visited = new Queue()
//     visited.enqueue([start, 0])

    
//     while (visited.length > 0){
//         let node = visited.dequeue();
//         if (node.value[0] === destination){
//             return node.value[1]
//         }
//         let neighbors = graph[node.value];
//         let x = 0;
//         while (x < neighbors.length){
//             if (visited)
//         }
        

//     }
    

// }




















const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const edges2 = [
  [1,2],
  [1,3],
  [3,4]
];

const edges3 = [
    [1,2],
    [1,3],
    [3,4],
    [6]
]