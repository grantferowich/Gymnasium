// findPermutations("aabc")

// (12) ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]
/** 
 *      input: "aabc"
 *      
 *                                                   ""  depth 0                -> when going right, add the next letter
 *                                                                              -> when going left, only pass the most recent build 
 *                                       /                            \
 *                                      "a"                           "b"    depth 1
 *                                   /      \                      /    \
 *                                 ""      "a"                  "a"     "aa"                  
 *  
 * 
 *  input: string
 *  output: array of strings 
 *  base case: "", 0
 *  recursive case: keep only the build, or, add the next letter
 *  termination case: when length of the build is equal to the input string length
 * 
 * 
 */

const stringPermutation = (string) => {
    let array = [];
    const buildPermutation = (build, depth) =>{
        console.log('build: ', build)
        if (depth  === string.length){
            
            array.push(build)
            return 
        }
        buildPermutation(build, depth +1)
        buildPermutation(build + string[depth], depth + 1)
    }
    buildPermutation("", 0)
    return array;
}

console.log(stringPermutation("aabc")) //