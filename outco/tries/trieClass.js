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
  constructor(value = null){
    this.value = value;
    this.next = {};
    this.end = false;
  }
 
}

class Trie {
  constructor(){
    this.root = new TrieNode(null)
  }

  insert(word) {
    let current = this.root;
    
    for (let x = 0; x < word.length; x++){
      let letter = word[x];
      if (current.next[letter] === undefined){
        current.next[letter] = new TrieNode(letter)
      }
      current = current.next[letter];
    }
    current.end = true;
  }

  isWord(word) {
    if (word.length === 0){
      return false;
    }
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
  search(word){
    let current = this.root;
    for (let x = 0; x < word.length; x++){
      let letter = word[x];
      if (current.value === letter && letter === word[word.length-1]){
        return true
      }
      if (current.value === letter){
        current = current.next[letter];
      }
    } 
    return false;
  }

}

