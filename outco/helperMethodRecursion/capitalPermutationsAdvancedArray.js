







const capitalPermutationsAdvancedArray = (string) => {

    let permutations = [];

    const generatePermutations = (build, depth) => {

        if (depth === string.length){
            if (!permutations.includes(build)){
                permutations.push(build);
                return
            }
        }

        if (typeof string[depth] === 'number'){
            generatePermutations(build+string[depth].toString, depth+1 )
        }

        let char = string[depth];
        let upper = char.toUpperCase();
        let lower = char.toLowerCase();

        generatePermutations(build+upper, depth+1)
        generatePermutations(build+lower, depth+1)
    }

    generatePermutations("",0)
    return permutations;
}

console.log(capitalPermutationsAdvancedArray("A1d3"))
