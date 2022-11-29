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
    let str = s.replace(/[^\w\s]/g,"");
    let words = str.split(" ");
    let hash = {};
    //remove all punctuation marks from words array

    for (let k = 0; k < words.length; k++){
     if (!hash[words[k]]){
      hash[words[k]] = 1;
     } else {
      hash[words[k]] += 1;
     }
    }
    return console.log(hash);      
}

wordCount('The cat and the hat.') // { the: 2, cat: 1, and: 1, hat: 1 }
wordCount('As soon as possible.') // { as: 2, soon: 1, possible: 1 }
wordCount("It's a man, it's a plane, it's superman!")
