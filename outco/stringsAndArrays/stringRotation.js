/**
 * 
 * String Rotation
 * 
 * Assume you have a method isSubstring() which checks if
 * one word is a substring of another. Given two strings, s1
 * and s2, write code to check if s2 is a rotation of s1 
 * using only one call to isSubstring. 
 *  
 * input: 'waterbottle' is a rotation of 'erbottlewat'.
 * 
 * output: true.
 * 
 * one approach is storing all the letters as keys
 * and the number of times a key appears as a value
 * then checking that each string has the same charMap.
 * 
 * however what about this case: 'abcde' and 'abced' => false.
 * 
 * string 1 is not a rotation of string 1.
 * so the charMap check does not cover all the cases we want.
 * 
 * Can I pop or push elements to check for rotations?
 * Popping the elements returns the last element.
 * Unshifting appends the element to the front of a string.
 * 
 * rotating right shifts the location of a char X times. 
 * rotating left shifts the location of a char Y times.
 * 
 * what shows s1 is NOT a rotation of s2:
 * 'abcde' is not a rotation of 'abced'
 * because abc is not rotated. 
 * 
 * 
 */

const stringRotation = (string, k) =>{ 
    let array = string.split('')
    let x = 0;
    while (x < k){
        let element = array.pop()
        array.unshift(element)
        x++
    }
    return array.join('')
}

input = 'wake forest'
console.log(stringRotation(input, 2)) // 'stwake fore'