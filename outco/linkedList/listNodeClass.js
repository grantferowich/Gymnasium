// tested the class on 12/18/22

class ListNode {
  constructor(value = null) {
   this.value = value
   this.nIntext = null;
  }
}

let x = new ListNode()
console.log(x) // ListNode { value: null, next: null}

let y = new ListNode(4)
console.log(y) // ListNode { value: 4, next: null}

