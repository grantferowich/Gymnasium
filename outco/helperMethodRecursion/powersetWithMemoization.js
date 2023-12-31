/**
 * Power Set With Memoization
 * 
 * Successfully tested powersetWithMemoization() on 12/11/2022.
 * 
 * Reviewing the 5 steps for implementing helper method recursion
 * 
 * 1, create state variable(s)
 * 2, return state variable(s)
 * 3, instantiate and invoke helper method
 * 4, Base case(s): recursion termination condition
 * 5, Recursive case(s): cases for the method to call itself
 * 
 * 
 * 
 *                            ""        --> build = "", depth = 0
 *                       /          \ 
 *                     ""           "a"  --> depth = 1
 *                    /  \         /   \
 *                  ""   "b"     "a"   "ab"   --> depth = 2
 *                 / \   / \     / \    / \
 *              ""  "c" "b""bc""a""ac""ab" "abc" --> depth = 3
 * 
 * powersetWithMemoization("abc") => ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
 */

const powersetWithMemoization = (word) => {
    // create state variable
    let array = []

    // create cache
    let cache = {}

    // define helper method
    const discoverCombos = (build, depth) => {

        // create the key: use the recursive call's inputs to formulate a string key
        let key = build.toString() + "_"+ depth.toString()
        
        // base case
        // condition at which the tree stops making binary decisions
        if (depth === word.length){
            array.push(build);
            return
        }
        
        // check cache to see if the subproblem was already solved
        if (cache[key]) {
            return
        }
    
        // recursive case 1: traverse left
        // when moving to the left, depth increases, build stays the same
        let left = discoverCombos(build, depth+1);
        
        // recursive case 2: traverse right 
        // when moving to the right, depth increases, 
        //build adds the letter at the depth index
        let right = discoverCombos(build + word[depth], depth + 1)
        
        // write to the cache
        cache[key] = left + right;
    }
    // invoke helper method
    discoverCombos("", 0);

    // return state variable
    return array;
}

console.log(powersetWithMemoization("abc"));