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
 var t0 = performance.now();

const stringPermutationWithMemoization = (string) => {
    let set = new Set()
    let hash = {}

    const buildPermutation = (build, usedIndexes) =>{
        
        let key = build + "_" + usedIndexes;
        if (hash[key]){return hash[key]}
        if (build.length  === string.length){
            set.add(build)
            return 
        }
        
        for (let x = 0; x < string.length; x++){
            let char = string[x];
            if (!usedIndexes.includes(x)){
                let subResult = buildPermutation(build + char, usedIndexes.concat(x))
                hash[key] = subResult;
            }
        }
    }
    buildPermutation("", [])
    return set;
}

console.log(stringPermutationWithMemoization("x")) // ['x']
console.log(stringPermutationWithMemoization("xy")) // [ 'xy', 'yx']
console.log(stringPermutationWithMemoization("abc")) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
// what if there are duplicates? If there duplicates the 
// buildPermutation function should only be called when the 
// location of the duplicate is different from the
console.log(stringPermutationWithMemoization("aabc"))
// [
//     'aabc',
//     'aacb',
//     'abac',
//     'abca',
//     'acab',
//     'acba',
//     'baac',
//     'baca',
//     'bcaa',
//     'caab',
//     'caba',
//     'cbaa'
//   ]

// console.log(stringPermutation("aabcxxbj"))
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");