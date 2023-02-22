// test case 1: 
// input: 'aaaabcdebcdfg'
// output: e


// Time: O(N)
// Space: O(N)

// brute force 
// for each char1 in string
    // for each char2 in string
        // if char1 == char2 
            // break
// return char1 
// time: O(N^2)
// space: O(1)

const firstNonRepeat = (string) => {

    // store all chars in a map with the number of times the character has occurred
    if (string.length === 0 || string === null){return ''};
    let counts = {} // O(N) space 
    // O(N) runtime
    for (let x = 0; x < string.length; x++){
        let char = string[x];
        counts[char] = counts[char] + 1 || 1;
    }

    // O(N) runtime
    // loop over each char in the string
    // if the char's count is 1
    // return the char
    let numKeys = Object.keys(counts).length
    console.log(numKeys)
    if (numKeys === 1){return Object.keys(counts)[0]}

    for (let x = 0; x < string.length; x++){
        let char = string[x];
        if (counts[char] === 1){
            return char
        }
    }
    
}
console.log(firstNonRepeat('aaaabcdebcdfg')) // 'e'
console.log(firstNonRepeat('aaaa')) // ''