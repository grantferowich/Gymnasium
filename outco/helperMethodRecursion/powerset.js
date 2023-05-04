// Power set 

// input: string
// output: array of strings

// When you have accumulated the powerset (array of strings), 
// return the output array sorted.


// input 1: "abc"
// output 1: [ "", "a", "ab", "abc", "ac", "b", "bc", "c"]

// input 2: ""
// output 2: ""


// using the bottom up approach to build sets starting from
// "" has O(2^N) run time and O(2^N + N) or O(2^N)

// the call stack uses O(N) auxiliary space
// the resulting array contains 2^N elements
// so the space complexity simplifies to O(2^N)

// Helper method recursion uses a recursive call stack
// for the powerset problem 
// the call stack features valid paths to construct a set from ""

/**
 * helper method recursion
 * 
 * 1, create state variable(s)
 * 2, return state variable(s)
 * 3, instantiate and invoke helper method
 * 4, Base case(s): recursion termination condition
 * 5, Recursive case(s): cases for the method to call itself
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
 * 
 * Successfully tested solution 12/12/22.
 */

const powerset = (word) => {
    // create state variable
    let array = []

    // define helper method
    const discoverCombos = (build, depth) => {

        // base case
        // condition at which the tree stops making binary decisions
        if (depth === word.length){
            array.push(build);
            return
        }
    
        // recursive cases
        // when moving to the left, depth increases, build stays the same
        discoverCombos(build, depth+1);
        
        // when moving to the right, depth increases, 
        //build adds the letter at the depth index
        discoverCombos(build + word[depth], depth + 1);
    }
    // invoke helper method
    discoverCombos("", 0);

    // return state variable
    return array
}

console.log(powerset("abc"))