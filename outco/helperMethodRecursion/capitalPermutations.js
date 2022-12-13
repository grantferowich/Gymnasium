/**
 * 
 * Capital Permutations
 * 
 * Given a string str of lowercase alphabetical characters, return the set of all permutations of those characters in upper AND lowercase.
 * Advanced
 * Solve the same problem, except now you may have number characters in your string (which don't have a lowercase or uppercase, but should still be included in your result) and capital letters, that need to be lowercased.
 * 
 * 
 * Input: "abc"
 * Output: ["ABC", "ABc", "AbC", "aBC", "Abc", "aBc", "abC", "abc"]
 * 
 * Advanced:
 * Input: "A1d3"
 * Output: ["A1D3", "a1D3", "A1d3", "a1d3"]
 * 
 * Time Constraints: O(2^N) (exponential)
 * Space Constraints: O(2^N) 
 * 
 * Diagram: build from bottom up 
 * 
 *                   ""  0   
 *            /                  \
 *          "a"                   "A"  1   
 *        /     \             /           \
 *     "ab"     "aB"       "Ab"           "AB"   2
 *     /  \      /  \      /    \         /   \
 * "abc" "abC" "aBc" "aBC" "Abc" "AbC" "ABc" "ABC"   3
 * 
 * 
 * 
 * 
 * 
 * // Completed successful testing of the solution with helper method recursion on 12/13/22.
 */

const capitalPermutations = (string) => {

    let permutations = []
    const generatePermutations = (str, depth) => {
        // input case 
        if (depth === string.length) {
            permutations.push(str);
            return 
        }
        
            let char = string[depth]
            let upper = char.toUpperCase()
            let lower = char.toLowerCase()
        generatePermutations(str + upper, depth + 1);
        generatePermutations(str + lower, depth + 1);
    }

    // start from base case
    generatePermutations("", 0);
    return permutations; 
}

console.log(capitalPermutations("abc"))