/**
 *  Sucessfully tested constructor, insert, isWord, isPrefix methods 1/24/23
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
        current = current.next[letter];
      } else {
        // case where letter does 
        // not exist in the trie
        let xNode = new TrieNode(letter);
        current.next[letter] = xNode;
        current = xNode;
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
    let current = this.root;
    let index = 0;

    while (index < word.length){
      let letter = word[index];
      if (!(letter in current.next)){
        return false;
      } else {
        current = current.next[letter];
      }
      index++
    }
    return !current.end
  }

  startsWith(word) {
    let output = [];
    let current = this.root;
    let index = 0;
    let path = [];

    const dfs = (node, path) => {
        
        //backtracking with path
        if (node.end){
            let word = path.join('')
            output.push(word)
        }
        // base case is reaching a leaf
        if (node === undefined){
            return;
        }
        // recursive call and backtracking
        for (let letter in node.next){
            path.push(letter)
            dfs(node.next[letter], path)
            path.pop()
        }
    }
    if (!word){
        dfs(this.root, path);
        return output
    }

    // validate the trie contains the word
    while (index < word.length){
      let letter = word[index];
      if (!(letter in current.next)){
        return []
      } 
        current = current.next[letter];
        path.push(letter);
        index++;
    }
    // once there is an occurrence of the letter(s)
    // in the trie, traverse to the end of that branch 
    // until finding a leaf, and push that branch 
    // into the output array
    dfs(current, path)
    return output;
  }

  remove(word) {
    let index = 0;
    while (index < word.length){
        let letter = word[index];
        if (!(letter in current.next)){
          return []
        } 
          current = current.next[letter];
          path.push(letter);
          index++;
      }
  }
}

let trie = new Trie()
trie.insert('wake')
console.log(trie)
console.log(trie.isWord('wake')) // true
console.log(trie.isWord('forest')) // false
console.log(trie.isPrefix('wa')) // true
console.log(trie.isPrefix('ba')) // false

let trieX = new Trie()
trieX.insert('cat')
trieX.insert('cow')
trieX.insert('dog')
trieX.insert('bird')
// trieX.insert('bear')

console.log(trieX.startsWith('c')) // [ 'cat' , 'cow' ]
console.log(trieX.startsWith('ci')) // []
console.log(trieX.startsWith('d')) // [ 'dog' ]
console.log(trieX.startsWith('b')) // [ 'bird' ]
// console.log(trieX.startsWith('x')) // []
console.log(trieX.startsWith('')) // [ 'cat', 'cow', 'dog', 'bird' ]

