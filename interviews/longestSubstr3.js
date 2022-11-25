// return the longest substring of unique characters in a given string 

// Solution 3: The solution uses an array instead of a set.
// The relevant methods used are .includes, .push, and .length,


const longestSubstr3 = (s) => {
    let array = [];
    let maxUniques = 1;
    for ( i = 0; i < s.length; i++ ){
        for ( j = i; j < s.length; j++ ){
            if (array.includes(s[j])){
              break
            } else {
                array.push(s[j])   
            }
        maxUniques = Math.max(array.length, maxUniques)
        }
    }
    return(maxUniques)
}

module.exports = longestSubstr3
