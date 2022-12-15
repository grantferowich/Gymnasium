// 201 - Longest Substring Without Repeating Characters
// Given a string s, find the longest substring without repeating characters.

// Input: String
// Output: String
// Example
// Input: abcabcbb      =>	Output: abc
// Input: bbbbb	 	=>	Output: b
// Input: pwwkew		=>	Output: wke
// Constraints
// N ~ Length of input string
// K ~ Number of unique characters in input string

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(K)

// solution logic
// increment right and hunt if there are no repeating characters
// incremenet left and catchup if there are repeats until there are no repeats

// Successfully tested the solution 12/14/22


const longestSubstring = (string) => {
    // create state variables
    let currentString = "";
    let longestString = "";

    for (let x = 0; x < string.length; x++){
        let char = string[x];
        let idx = currentString.indexOf(char)
        // console.log('currentString: ', currentString);
        // console.log('char: ', char)
        // console.log('idx: ', idx);

        // the idx > - 1 case being true is where the catchup logic happens
        if (idx > -1){
                if (currentString.length > longestString.length) { longestString = currentString; }
                // .slice(2) will trim the first two elements from the string
                // :. the slice logic is how the window minimizes from the left 
                currentString = currentString.slice(idx + 1) + char;
        } else {
            // hunt and expand 
            currentString += char;
            // console.log('currentString: ', currentString)
        }
    }
    // update result variable
    if (currentString.length > longestString.length) { longestString = currentString; }
    // return state variable
    return longestString
}

console.log(longestSubstring("abcabcbb"))
console.log(longestSubstring("bbbbb"))
console.log(longestSubstring("pwwkew"))