// loop through all possible substring combinations
// with 2 pointers
// if a substring contains a repeat character, throw out the substring 
// only add a substring to the accumulator set if the characters are unique
// the algorithm has to compare the substring from i to j-1 with the j'th element

// if the substring from i to j-1 has j, then the substring contains repeats, 
// and the substring must not be added to the set

// if the substring from i to j-1 does not have j, 
// then the substring is unique and may be added to the accumulator object

// sort the set from largest value to smallest value
// return the length of the sorted set


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
    console.log( maxUniques);
   
}


    // console.log(accumulator)
    // let sorted = accumulated.sort((a,b) => a - b);
    // console.log(sorted)
    // console.log(sorted[0].length)

y = "abcabcbb" // 3
longestsubstring(y)