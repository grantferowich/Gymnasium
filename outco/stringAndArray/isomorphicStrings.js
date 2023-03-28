/* 
Isomorphic Strings

Easy

✓ Successfully tested the function 03/28/23.

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while
preserving the order of characters. No two characters may map to the same character,
but a character may map to itself.


example 1: 
str1 = 'grant' 
str2 = 'wakeforest'
output = false
reason: lengths are different

example 2: 
str1 = 'egg'
str2 = 'add'
output: true
reasons: the frequency value of each index in both strings is equal

*/

const isomorphicStrings = (str1, str2) => {
    if (str1.length !== str2.length){
        return false;
    }

    let str1Map = new Map();
    let str2Map = new Map();

    let xInt = 0
    while (xInt < str1.length){
        let char1 = str1[xInt]
        let char2 = str2[xInt]
        if (!str1Map.has(char1)){
            str1Map.set(char1, 1)
        }
        if (str1Map.has(char1)){
            let frequency1Int = str1Map.get(char1)
            str1Map.set(char1, frequency1Int+1)
        }
        if (!str2Map.has(char2)){
            str2Map.set(char2, 1)
        }
        if (str2Map.has(char2)){
            let frequency2Int = str2Map.get(char2)
            str2Map.set(char2, frequency2Int+1)
        }
        xInt++
    }

    xInt = 0
    while (xInt < str1.length){
        char1 = str1[xInt]
        char2 = str2[xInt]
        frequency1Int = str1Map.get(char1)
        frequency2Int = str2Map.get(char2)
        if (frequency1Int !== frequency2Int){
            return false
        } 
        xInt++
    }
    
    return true;
}

// const isomorphicStrings = (str1, str2) => {
//     if (str1.length !== str2.length){
//         return false
//     }

//     let str1Map = new Map();
//     let str2Map = new Map();

//     for (let xInt = 0; xInt < str1.length; xInt++){
//         const char1 = str1[xInt]
//         const char2 = str2[xInt]
//         if (!str1Map.has(char1) && str2Map.has(char2)){
//             str1Map.set(char1, char2)
//             str2Map.set(char2, char1)
//         } else if (str1Map.get(char1) !== char2 || str2Map.get(char2) !== char1){
//             return false
//         }
//     }
//     return true;
// }

/* TESTS */

const input1 = 'grant'
const input2 = 'wakeforest'
const testResult1 = isomorphicStrings(input1, input2)
console.log(`Test result 1 ${testResult1}`)


const input3 = 'egg'
const input4 = 'add'
const testResult2 = isomorphicStrings(input3, input4)
console.log(`Test result 2 ${testResult2}`)


const input5 = 'foo'
const input6 = 'bar'
const testResult3 = isomorphicStrings(input5, input6)
console.log(`Test result 3 ${testResult3}`)

const input7 = 'paper'
const input8 = 'title'
const testResult4 = isomorphicStrings(input7, input8)
console.log(`Test result 4 ${testResult4}`)

const input9 = "bbbaaaba"
const input10 = "aaabbbba"
testResult5 = isomorphicStrings(input9, input10)
console.log(`Test result 5 ${testResult5}`)



// const inputArr = [['grant', 'wakeforest'], ['egg', 'add'], ['foo', 'bar'], ['paper', 'title'] ]


// const runTests = (arr) => {
//     // generate date on which tests were run
//     const todayDate = new Date()
//     const dayInt = todayDate.getDate()
//     const monthInt = todayDate.getMonth()
//     const yearInt = todayDate.getFullYear()

//     let xInt = 0
//     while (xInt < arr.length){
//         let testIntputInt = arr[xInt]
//         let resultInt = isomorphicStrings(testIntputInt)
//         console.log(`Test ${xInt}: ${resultInt}`)
//         xInt++
//     }


//     console.log(`✓ Successfully tested the function ${dayInt}/${monthInt}/${yearInt}`);
// }

// runTests(inputArr)

/* TEST RESULTS

*/