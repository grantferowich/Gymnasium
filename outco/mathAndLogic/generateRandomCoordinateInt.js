
// want equal number of occurrences from 0 to 9
const generateRandomCoordinateInt = () =>{
    return parseInt(Math.random() * 10);
}

const testRandomness = () =>{
    let occurrences = {};

    for (let x = 0; x < 2000; x++){
        let num = generateRandomCoordinateInt()
        occurrences[num] = occurrences[num] + 1 || 1;
    }
    return occurrences
}

console.log(testRandomness())
