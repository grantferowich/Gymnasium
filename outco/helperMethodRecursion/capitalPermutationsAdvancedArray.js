/**
 * 
 * Capital Permutations - Advanced 
 * 
 * Given a string str of lowercase alphabetical characters, return the set of all permutations of those characters in upper AND lowercase.
 * Advanced
 * Solve the same problem, except now you may have number characters in your string (which don't have a lowercase or uppercase, but should still be included in your result) and capital letters, that need to be lowercased.
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
// successfully tested capitalPermutationsAdvancedArray on 12/13/22

// the solution uses isNaN() which is a function returning true if a number is a number type after being converted to number
// e.g. isNaN("1") returns false because converting "1" to a number and checking the type returns that it is a number
// isNaN("G3") returns true
*/

const capitalPermutationsAdvancedArray = (string) => {

    let permutations = [];
    // let hash = {};

    const generatePermutations = (build, depth) => {

        if (depth === string.length){
                permutations.push(build);
                return
        }

        
        if (!isNaN(string[depth])) {
            generatePermutations(build+string[depth].toString(), depth+1 )
        } else {
            let char = string[depth];    
            let upper = char.toUpperCase()
            let lower = char.toLowerCase()
            generatePermutations(build + upper, depth+1)
            generatePermutations(build + lower, depth+1)
        }  
    }

    generatePermutations("",0)
    return permutations;
}

console.log(capitalPermutationsAdvancedArray("A1d3")) // Expected output:  ["A1D3", "a1D3", "A1d3", "a1d3"]
