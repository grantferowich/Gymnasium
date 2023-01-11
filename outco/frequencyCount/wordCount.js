/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

 const wordCount = (sentence) => {
    let s = sentence.toLowerCase();
    // replace everything that is NOT \w, a digit, letter, or underscore 
    let str = s.replace(/[^\w\s]/g,"");
    console.log('str: ', str)
    let words = str.split(" ");
    console.log('words: ', words)
    let hash = {};
   
    //remove all punctuation marks from words array
    if (words.length === 0){
        return {};
    }

    for (let k = 0; k < words.length; k++){
     if (!hash[words[k]]){
      hash[words[k]] = 1;
     } else {
      hash[words[k]] += 1;
     }
    }
    return hash    
}

console.log(wordCount('The cat and the hat.')) // { the: 2, cat: 1, and: 1, hat: 1 }
console.log(wordCount('As soon as possible.')) // { as: 2, soon: 1, possible: 1 }
console.log(wordCount("It's a man, it's a plane, it's superman!"))
console.log(wordCount(""))
