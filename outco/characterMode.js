// Character Mode
//  *
//  * Given a string, find the most frequent occurring letter(s) in the string
//  *
//  * Parameters
//  * Input: str {String}
//  * Output: {String}
//  *
//  * Constraints
//  * If more than one letter is tied for the most frequent, return a string of all
//  * the letters in one string.
//  *
//  * Upper case characters should count as lower case, and do not include spaces
//  * ... as characters.
//  *
//  * Time: O(N)
//  * Space: O(N)
//  *
//  * Examples
//  * 'hello' --> 'l'
//  * 'A walk in the park' --> 'a'
//  * 'noon' --> 'no'
//  */
function characterMode(string) {
    
    let stringLower = string.toLowerCase();
    let stringArray = stringLower.split(" ");
    let s = stringArray.join("");
    let hash = {};

    // count the number of times each character appears
    for (let i = 0; i < s.length; i++){
      if (!hash[s[i]]){
        hash[s[i]] = 1;
    } else {
      hash[s[i]] += 1;
    }}
    
    // loop through each key to find the key whose value is the largest in the hash map
    let maxKey = s[0];
    // console.log('maxKey', maxKey);
    // set maxKey as the first 
    for (const key in hash){
      (hash[key] > hash[maxKey]) ? (maxKey = key) : maxKey;
    }
    // console.log('hash',hash)
    let result = '';
    for (const k in hash){
      if (hash[maxKey] === hash[k]){
        result += k;
        // console.log('result', result)
      } 
    }
    return console.log(result);
 }


 //  * 'hello' --> 'l'
//  * 'A walk in the park' --> 'a'
//  * 'noon' --> 'no'
//  */

 characterMode('hello');
 characterMode('A walk in the park');
 characterMode('noon');