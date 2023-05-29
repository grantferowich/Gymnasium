/**
 *  Homework - Trie
 *
 *  TrieNode class
 *
 *  Prompt:    Create a TrieNode class
 *             The TrieNode class should contain the following properties:
 *
 *                 value:   {Character} - default null
 *                  next:   {HashTable}
 *                   end:   {Boolean}
 *
 *
 *               Example:   let sample = new TrieNode("b")
 *                          sample.value     // "b"
 *                          sample.end       // false
 *
 *  Trie class
 *
 *  Prompt:     Create a Trie class
 *              The Trie class should contain the following properties:
 *
 *                  root:   {TrieNode}
 *
 *              The Trie class should also contain the following methods:
 *
 *                insert:   A method that adds a word.
 *
 *                          Input:     word {String}
 *                          Output:    {undefined}
 *
 *                isWord:   A method that checks whether a word is in the trie.
 *
 *                          Input:     word {String}
 *                          Output:    {Boolean}
 *
 *              isPrefix:   A method that checks whether an input is a prefix of
 *                          a word in the string.
 *
 *                          Input:     word {String}
 *                          Output:    {Boolean}
 *
 *            startsWith:   A method that returns all words that starts with an
 *                          input word.
 *
 *                          Input:     word {String}
 *                          Output:    {Array of Strings}
 *
 *          EXTRA CREDIT:
 *                remove:   Removes a word from the trie.
 *
 *                          Input:     word {String}
 *                          Output:    {undefined}
 */

'use strict';


class TrieNode {
    constructor(valueStr=null){
        this.valueStr = valueStr;
        this.nextHM = new Map();
        this.endTorF = false;
    }
}

class Trie {
  // YOUR WORK HERE
  constructor(){
    this.rootNode = new TrieNode('')
  }

  /* 
        ""
        /
       w 
       /
       a
       /
       k
       /
       e
  
  */
  insert(wordStr = '') {
    // invalid input
    if (wordStr.length === 0){
        return 
    }
    let currentNode = this.rootNode
    console.log('1 current node', currentNode)
    let xInt = 0;
    while (xInt < wordStr.length){ 
        let charStr = wordStr[xInt];
        if (!currentNode.nextHM.has(charStr)){
            currentNode.nextHM.set(charStr, new TrieNode(charStr))
        }
        currentNode = currentNode.nextHM.get(charStr)
        xInt++
    }
    currentNode.endTorF = true;
  }

  isWord(word) {
    // YOUR WORK HERE
  }

  isPrefix(word) {
    // YOUR WORK HERE
  }

  startsWith(word) {
    // YOUR WORK HERE
  }

  remove(word) {
    // YOUR WORK HERE
  }

}

/* Tests */
/* Test 1: instantiate a trie node */
let trieNode1 = new TrieNode("w")
console.log('Result 1: ',trieNode1)

/* Test 2: insert a word into an empty trie */
let trie2 = new Trie();
trie2.insert('wake');
console.log('Result 2: ', trie2)
console.log('Result 2 contd:', trie2.rootNode.nextHM)



/* Test results 
Test 1: instantiate a trie node
Result 1: TrieNode { valueStr: 'w', nextHM: Map(0) {}, endTorF: false }


*/