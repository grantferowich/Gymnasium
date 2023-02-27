/* 
COIN FLIPPING AND DIE ROLLS

Successfully tested the function 2/27/23.

Describe an algorithm to output a die roll (a random number from 1 to 6), given a
function that outputs a coin toss (a random number from 1 to 2). Each possible
outcome should be equally likely.

Sample Answer: Flip the coin three times, and use the three coinflips as the bits of a
three‐bit number. If the number is in the range 1 to 6, output the number.
Otherwise, repeat. Note that many other answers are possible.

*/

const tossCoin = () => {
    let value = Math.random()
    if (value > 0.5){
        return 1
    } else {
        return 0
    }
}

const rollDie = () => {
    let number = tossCoin()
    if (number === 0){
        return parseInt(Math.random() * 3)
    } 
    if (number === 1){
        return 4 + parseInt(Math.random() *3)
    }
}

const testRandomness = () =>{
    let occurrences = {};
    for (x = 0; x < 2000; x++){   
        let randomValue = rollDie()
        occurrences[randomValue] = occurrences[randomValue] + 1 || 1;
    }
    return occurrences
}

const results = testRandomness()
console.log('results', results)
