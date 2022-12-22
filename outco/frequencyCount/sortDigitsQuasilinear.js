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

function sortDigitsQuasilinear(n){

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
