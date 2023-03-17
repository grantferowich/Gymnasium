class Node {
  constructor(value) {
    this.val = value;
    this.nIntext = null;
  }
}

const sumList = (head) => {
    let current = head;
    let sum = 0
    while (current){
      let value = current.val;
      sum += value;
      current = current.next
    }
    return sum;
};

let listX = new Node(1)
listX.next = new Node(1)
listX.next.next = new Node(2)
// 4
console.log(sumList(listX))