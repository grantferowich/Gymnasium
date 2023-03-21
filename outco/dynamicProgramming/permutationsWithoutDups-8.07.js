/* 

Permutations without duplicates 

CTCI 8.07

Successfully tested the function 03/21/20/23.

Write a method to computer all permutations of a string of unique characters.

Example case

input = 'abc'
output = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

*/

const permutationsWithoutDups = (str ='') => {
    let permutationsSet = new Set();

    const generatePermutations = (build) => {
        if (build.length === str.length){
            permutationsSet.add(build)
            return
        }
        for (let x = 0; x < str.length; x++){
            if (build.indexOf(str[x]) === -1){
                generatePermutations(build+str[x])
            }
            
        }
    }
    generatePermutations('')
    return permutationsSet
}

/* TESTS */

const data1 = 'ab'
const test1 = permutationsWithoutDups(data1)
console.log('Test 1: ', test1)

const data2 = 'abc';
const test2 = permutationsWithoutDups(data2)
console.log('Test 2: ', test2)