/* 

Word Frequencies
CTCI 16.02
Successfully tested the function on July 11, 2023. 

Design a method to find the frequency of occurrences of any given word
in a book. What if we were running this algorithm multiple times?

Put a string into an array. 
Remove exclamation points, commas, periods, apostraphes, dashes, and numbers

const str1 = "wake forest university." => {"wake" => 1, "forest" => 1, "university"=> 1}
const str2 = "Sam I am, I am Sam, I am!" {"am"=>3, "i" => 3, "sam" => 2,}

*/


const wordFrequencies = (str) => {
    let wordArr = str.replaceAll(",","").replaceAll("!", "").replaceAll(".","").toLowerCase().split(" ")
    let wordMap = new Map();
    let xInt = 0;
    while (xInt < wordArr.length){
        let word = wordArr[xInt];
        if (wordMap.has(word)){
            let frequencyInt = wordMap.get(word);
            wordMap.set(word, frequencyInt + 1);
        }
        if (!wordMap.has(word)){
            wordMap.set(word, 1);
        }
        xInt++;
    }
    return wordMap;
} 

/* Tests */

const str1 = "wake forest university.";
const str2 = "Sam I am, I am Sam, I am!";

const result1Map = wordFrequencies(str1);
const result2Map = wordFrequencies(str2);
console.log('Result 1: ', result1Map)
console.log('Result 2: ', result2Map)
/* Test results
Result 1:  Map(3) { 'wake' => 1, 'forest' => 1, 'university' => 1 }
Result 2:  Map(3) { 'sam' => 2, 'i' => 3, 'am' => 3 }
*/