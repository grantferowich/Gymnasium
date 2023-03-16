// from /linkedList/randomNodeValue.js

const testRandomness = () =>{
    let occurrences = {};

    for (let x = 0; x < 2000; x++){
        let num = generateRandomCoordinateInt()
        occurrences[num] = occurrences[num] + 1 || 1;
    }
    return occurrences
}

console.log(testRandomness())
