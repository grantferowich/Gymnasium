/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters.
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints.
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 *
 */
// store each number in a hash map
// store the count of each number 
// can we assume the input is an integer?
// loop over each character in the number
// can we assume the input is a positive integer?
// We cannot assume the input is positive. 

function sortDigits(n){

    let string = n.toString();
    let array = string.split("");
    array.sort();
    let numbers = [] 
    for (let i = 0; i <array.length; i++){
        if (parseInt(array[i]) !== 0){
            numbers.push(array[i])
        }
    }
    return console.log(numbers.join(""))
}

// sortDigits(8970)
// sortDigits(32445)

const sortDigitsLinear = (number) => {
    let hash = {};
    let final = 0;
    // build up hash by setting the key as the digit in 
    while (number > 0){
        // "access" integer from right to left as the remainder of
        // number divided by 10
        let digit = number % 10;
        console.log('digit', digit)
        hash[digit] = hash[digit] + 1 | 1;
        number = parseInt(number/10);
    }
    let power = 0;
    for (let x = 10; x >= 0; x--){
        if (hash[x] !== undefined){
            while (hash[x] >=1){
                (console.log(Math.pow(10,power)))
                final += x * Math.pow(10, power);
                power += 1;
                hash[x] -= 1;
            }
        }
    }
    return final;
}

console.log(sortDigitsLinear(8970))
console.log(sortDigitsLinear(32445))