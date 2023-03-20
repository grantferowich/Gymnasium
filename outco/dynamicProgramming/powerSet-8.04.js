/* 
Power Set 

CTCI 8.04

Write a method to return all subsets of a set.

input string = 'ab'
output : ['', 'a', 'b', 'ab']

*/

const powerSet = (str='') => {
    if (str.length === 0){
        return []
    }
    let powerSet = new Set();
    const generateSubSets = (build, depth) => {
        if (depth > str.length){
            return
        }
        powerSet.add(build);
        generateSubSets(build + str[depth], depth + 1);
        generateSubSets(build, depth + 1);
    }

   generateSubSets('', 0)
   return powerSet
}

/* TESTS */


const str1 = 'ab';
const result1 = powerSet(str1)
console.log('Test result 1: ', result1)
// { '', 'a', 'ab', 'b' } ✓

const str2 = 'abc';
const result2 = powerSet(str2)
console.log('Test result 2: ', result2)
// { '', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' } ✓

