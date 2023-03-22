/* 
Permutations with Dups

Successfully tested the function 03/22/2023.

Write a method to compute all permutations of a string whose characters are not necessarily unique. 
The list of permutations should no have duplicataes.

input = 'aab'
output = {'aab', 'aba', 'baa'}

// idealMap {
    a: 2
    b: 1
}



*/

const permutationsWithDups = (str ='') => {
    if (str.length === 0){
        return []
    }
    let permutationsSet = new Set();
    let idealMap = new Map()
    let xInt = 0
    while (xInt < str.length){
        let char = str[xInt]
        if (idealMap.has(char)){
            let frequency = idealMap.get(char)
            idealMap.set(char, frequency + 1)
        } 
        if (!idealMap.has(char)){
            idealMap.set(char, 1)
        }
        xInt++
    }

    const generatePermutations = (build) => {
        if (build.length === str.length){
            let tempMap = new Map()
            let xInt = 0
            while (xInt < build.length){
                let char = build[xInt]

                if (tempMap.has(char)){
                    let frequency = tempMap.get(char)
                    tempMap.set(char, frequency + 1)
                }

                if (!tempMap.has(char)){
                    tempMap.set(char, 1)
                }  
                xInt++  
            }

            for (let [kStr, vInt] of tempMap){
                if (tempMap.get(kStr) !== idealMap.get(kStr)){
                    return
                }
            }
            permutationsSet.add(build)
            return
        }

        for (let x = 0; x < str.length; x++){
            generatePermutations(build+str[x])
        }
    }
    generatePermutations('')
    return permutationsSet
}

/* TESTS */

const data1 = 'aab'
console.log(permutationsWithDups(data1))
// 