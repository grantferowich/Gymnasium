// return the longest substring of unique characters in a given string 


const longestsubstring = (s) => {
    let accumulator = new Set();
    let maxUniques = 0;
    for ( i = 0; i < s.length; i++ ){
        for ( j = i; j < s.length; j++ ){
            if (accumulator.has(s[j])){
              break
            } else {
                accumulator.add(s[j])   
            }
         
        maxUniques = Math.max(accumulator.size, maxUniques)
        
        }
    }
    console.log(maxUniques);
   
}



y = "abcabcbb" // 3
// longestsubstring(y)

const longestsubstringarray = (s) => {
    let array = [];
    let maxUniques = 0;
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
    console.log(maxUniques);
}


y = "abcabcbb" // 3
longestsubstringarray(y)
