/* 
Maximum Number of Balloons

Easy

Given a string text, you want to use the characters of text
to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the 
maximum number of instances that can be formed.

Example 1
Input: text = "nlaebolko"
Output: 1

Example 2
Input: text = "loonbalxballpoon"
Output: 2

Example 3 
Input: text = "leetcode"
Output: 0

Diagram 
charMap = {n=>1,
           l=>2,
           ...}


Count the frequency of each char 
loop over the chars of the word balloon
decrement the frequencies in the charMap
each time through the loop increment the countInt

*/

const maxiumNumberOfBalloons = (str) => {
    let charMap = new Map();
    let balloonMap = new Map()
    let xInt = 0;
    let balloonStr = 'balloon'
    let resultInt = 0 
    
    // init the charMap
    while (xInt < str.length){
        let char = str[xInt];
        if (!charMap.has(char)){
            charMap.set(char, 1)
        } else {
            let freqInt = charMap.get(char)
            charMap.set(char, freqInt + 1)
        }
        xInt++
    }

    // init the balloon map for ref
    xInt = 0
    while (xInt < balloonStr.length){

        let char = balloonStr[xInt]; 

        if (!balloonMap.has(char)){
            balloonMap.set(char, 1)
        } else {
            let freqInt = balloonMap.get(char)
            balloonMap.set(char, freqInt + 1)
        }

        xInt++;
    }

    resultInt = Math.min(charMap.get('b'), charMap.get('a'), (charMap.get('l')/2), (charMap.get('o')/2), charMap.get('n'))
    return resultInt > 0 ? resultInt : 0
}

/* TESTS */

const inputArr1 = ['leetcode', 'loonbalxballpoon', 'nlaebolko']

// Expect: 0, 2, 1
const runTests = (inputArr) => {
    // generate date on which tests were run
    const todayDate = new Date()
    const dayInt = todayDate.getDate()
    const monthInt = todayDate.getMonth() + 1
    const yearInt = todayDate.getFullYear()

    let xInt = 0
    while (xInt < inputArr.length){
        let testIntputInt = inputArr[xInt]
        let resultInt = maxiumNumberOfBalloons(testIntputInt)
        console.log(`Test ${xInt}: ${resultInt}`)
        xInt++
    }


    console.log(`✓ Successfully tested the function ${monthInt}/${dayInt}/${yearInt}`);
}

runTests(inputArr1)