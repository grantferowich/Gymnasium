/**
 *  Sucessfully tested constructor, insert, and isWord methods 1/24/23
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
  constructor(value){
    this.value = value;
    this.next = {};
    this.end = false;
  }
 
}

class Trie {
  constructor(){
    this.root = new TrieNode('')
  }

  insert(word) {
    let current = this.root;
    let index = 0;
    while (index < word.length) {

      let letter = word[index];

      // case where letter exists in the descendents
      // of the current node
      if (letter in current.next){
        current = current.next[letter]
      } else {
        // case where letter does 
        // not exist in the trie
        let xNode = new TrieNode(letter)
        current.next[letter] = xNode;
        current = xNode
      }
      index++
    }
    current.end = true;
  }

  isWord(word) {
    if (word.length === 0){
      return false;
    }
    let current = this.root;
    let index = 0;
    while (index < word.length){
        let letter = word[index];
        if (!(letter in current.next)) {
            return false;
        } else {
            current = current.next[letter];
        }
        index++;
    }
    return current.end
  }

  isPrefix(word) {
    // const 

  }

  startsWith(word) {
    // YOUR WORK HERE
  }

  remove(word) {
    // YOUR WORK HERE
  }
}


let trie = new Trie()
trie.insert('wake')
console.log(trie)
console.log(trie.isWord('wake')) // true
console.log(trie.isWord('forest')) // false