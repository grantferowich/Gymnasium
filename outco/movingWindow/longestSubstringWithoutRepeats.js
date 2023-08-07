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
// any major notes? 
// you can use -1 as an index to indicate that a char is NOT present in a string
// 

  // question: x and idx are ALWAYs the same right?
        // So if x and idx are always the same, why not just use X and skip the idx state? 
        // no: idx gives a number for where in the currentString a char is
        // x simply tells where in the input string the loop is 

        // the idx > - 1 case being true is where the catchup logic happens
        // if current string doesn't have the char in it idx will be -1
        // when the current string DOES have the char in it.. 
        // set longestString (result/ultimate) to current string (local) if currentString is longer
        // set the currentString to the 

        // when the idx is greater than 1 is when the current char IS a repeat char 
        // since the new char at index x is on the right side of the string
        // the left side of the currentString must move up index-wise when the newest element at x is a repeat

        // repeat found --> contract to the index after the first location of the repeat

// Successfully tested the solution 12/14/22
// check char existence in currentstring
// if char exists in the current string, then no dice! slice up the string and start over
    // re-start the current string from the next index, appending the char
// if the char does not exist in the current string, simply append to current string
// some logic for updating longest string variable using the current, local string

const longestSubstring = (string) => {
    // create state variables
    let currentString = "";
    let longestString = "";
    for (let x = 0; x < string.length; x++){
        let char = string[x];
        let idx = currentString.indexOf(char);
        // case 1: array[x] is a repeat as evidenced by idx > -1 
        // when the element is unique, idx evaluates to -1
        if (idx > -1){
                if (currentString.length > longestString.length) { longestString = currentString; };
                currentString = currentString.slice(idx + 1) + char;
        } else {
            // hunt and expand 
            currentString += char;
        }
    }
    // update result variable
    if (currentString.length > longestString.length) { longestString = currentString; }
    // return state variable
    return longestString.length
}

console.log(longestSubstring("abcabcbb")) // abc
console.log(longestSubstring("bbbbb")) // b
console.log(longestSubstring("pwwkew")) //wke
console.log(longestSubstring('wakeforest')) // wakefor 
console.log(longestSubstring('wakeforestuniversity')) // forestuniv // slice 
console.log(longestSubstring('wakeforestcollege')) // wakefor
console.log(longestSubstring('saintcharles')) // intcharles


