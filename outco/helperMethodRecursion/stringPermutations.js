// findPermutations("aabc")

// (12) ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]
/** 
 *      input: "aabc"
 *      
 *                                                                ""  depth 0                -> when going right, add the next letter
 *                                                                                           -> when going left, only pass the most recent build 
 *                                         /                /               \     \     \
 *   depth 1                            ""                "a"              "a"    "b"   "c"  
 *                                   / / \ \  \    /  /  /    \   \        /      \
 *                                 """a""a""b""c" "a""aa""aa""ab""ac"                                              
 *  
 * 
 *  input: string
 *  output: array of strings 
 *  base case: "", 0
 *  recursive case: build up from base case
 *  termination case: when length of the build is equal to the input string length
 *  nly push solutions whose length is equal to the length of the input string
 * 
 * 
 */

const stringPermutation = (string) => {
    let array = [];
    const buildPermutation = (build, usedIndexes) =>{
        if (build.length  === string.length){
            array.push(build)
            return 
        }
        
        for (let x = 0; x < string.length; x++){
            let char = string[x];
            if (!usedIndexes.includes(x)){
                buildPermutation(build + char, usedIndexes.concat(x))
            }
        }
        
    }
    buildPermutation("", [])
    return array;
}

console.log(stringPermutation("abc")) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
// what if there are duplicates? If there duplicates the 
// buildPermutation function should only be called when the 
// location of the duplicate is different from the
console.log(stringPermutation("aabc"))