/**
 * Successfully completed testing 12/13/22. 
 * Count Vowel Strings
 * 
 * Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u).
 * Input: n (Integer)
 * Output: Integer
 * 
 * sExample:
 * Input: n = 1
 * Output: 5
 * Explanation: The strings that consist of vowels only are ["a","e","i","o","u"].
 * 
 * Input: n = 2
 * Output: 25
 * Explanation: The 25 strings that consist of vowels are
 * ["aa","ae","ai","ao","au","ea", ee","ei","eo","eu","ia","ie","ii","io","iu","oa","oe","oi",
 * "oo","ou","ua", "ue", "ui", "uo" "uu"].
 * 
 * Input: a number 
 * Output: a number 
 * 
 * Constraints
 * Time Complexity: O(5^N)
 * Space Complexity: O(N)
 *                                  ""
 *                          /     /   \     \   \
 *                       "a"    "e"   "i"   "o"  "u"
 * 
 * 
 */


const countVowelStrings = (number) => {
    let array = []
    
    const generateString = (build, depth) => {
        // base case
        if (depth === number){
            array.push(build)
            return;
        }
        // recursive case
        // nested recursion
        // call recursion for each vowel 
        for (let char in "aieou"){
            generateString(build+char, depth +1)
        }
    }
    generateString('',0)
    return array.length
}

console.log(countVowelStrings(1)) // 5 
console.log(countVowelStrings(2)) // 25 