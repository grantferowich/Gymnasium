/* 

567. PERMUTATIONS IN STRING
Medium

* untested
* The function passed certain test cases as of 2/21/23.
* The function did not pass a comprehensive suite of test cases as of 2/21/23.
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

function 1: generatePermutations(x) => takes in a string,
 returns a set of permutations of x
    -> uses helper method recursion
    -> builds up from "" and 0 depth
    -> recursive tree diagram for (ab)

                 ""  depth = 0
               /     \
              ''     'a'  depth = 1
           /   \     /  \
         ''   'b'  'a'  'ab' depth = 2  


function 2: permutationExists(s1, s2)
 returns true if s2 contains a permutation of s1    
 // put permutations from helper method into a hash map
 //   -- key: permutation, value = 1
 // expand window until window size equals s1.length
 // once the window size eqals s1.length
 // check if the stuff in the window exists 
 as a key in the hashmap of permutations
 // return true if the stuff inside the window 
 // is a key of the hashmap

 // contract when the window size exceeds s2.length
 // evict the char at the left window edge,
 // by implementing shift to kick the char out

*/

const stringPermutationWithMemoization = (string) => {
    let set = new Set()
    let hash = {}
    let usedIndexes = []

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
                hash[key] = buildPermutation(build + char, usedIndexes.concat(x))
            }
        }
    }
    buildPermutation("", usedIndexes)
    return set;
}

let s1 = 'ab'
let s2 = 'eidbaooo'
// let permuations = stringPermutationWithMemoization(s1)

let s3 = 'wake'
let s4 = 'ekawforest'

let s5 = 'wake'
let s6 = 'forest'

let s7 = 'adc'
let s8 = 'dcda'

const permutationExists = (s1, s2) => {
    // returns a set
    let permutations = stringPermutationWithMemoization(s1)
    let leftPtr = 0;
    let rightPtr = 0;
    let currentWindow = '';

    while (rightPtr < s2.length){      
        if (currentWindow.length === s1.length){
            if (permutations.has(currentWindow)){
                return true;
            }
        }
        let char = s2[rightPtr];
        currentWindow += char;
        if (currentWindow.length > s1.length){
            currentWindow = currentWindow.slice(1)
            leftPtr++
        }
        rightPtr++
    }
    return false;
}

console.log(permutationExists(s1, s2)) // true
console.log(permutationExists(s3, s4)) // true
console.log(permutationExists(s5, s6)) // false

