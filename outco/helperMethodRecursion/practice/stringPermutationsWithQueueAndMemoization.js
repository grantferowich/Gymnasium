// successfully tested the function 1/14/23

const stringPermutationWithMemoization = (string) => {
    let set = new Set();
    let hash = {};

    const buildPermutation = (build, usedIndexes) => {
        let key = build + "_" + usedIndexes;
        if (hash[key]) {
            return hash[key];
        }

        let queue = [[build, usedIndexes]];
        while (queue.length) {
            let [build, usedIndexes] = queue.shift();
            if (build.length === string.length) {
                set.add(build);
            } else {
                for (let x = 0; x < string.length; x++) {
                    let char = string[x];
                    if (!usedIndexes.includes(x)) {
                        queue.push([build + char, usedIndexes.concat(x)]);
                    }
                }
            }
        }
    };
    buildPermutation("", []);
    return set;
};

console.log(stringPermutationWithMemoization('abc'))
console.log(stringPermutationWithMemoization('abcx'))