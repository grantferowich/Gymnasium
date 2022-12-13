// successfully tested capitalPermutationsAdvancedArray on 12/13/22


const capitalPermutationsAdvancedArray = (string) => {

    let permutations = [];
    let hash = {};

    const generatePermutations = (build, depth) => {

        if (depth === string.length){
                permutations.push(build);
                return
        }

        if (typeof string[depth] === 'number'){
            generatePermutations(build+string[depth].toString, depth+1 )
        }

        let char = string[depth];    
        let upper = char.toUpperCase()
        let lower = char.toLowerCase()

        generatePermutations(build + upper, depth+1)
        generatePermutations(build + lower, depth+1)
    }

    generatePermutations("",0)
    
    for (let x = 0; x < permutations.length; x++){
        let element = permutations[x];
        !hash[element] ? hash[element] = true : 0
    }
    
    return Object.keys(hash)
}

console.log(capitalPermutationsAdvancedArray("A1d3")) // Expected output:  ["A1D3", "a1D3", "A1d3", "a1d3"]
