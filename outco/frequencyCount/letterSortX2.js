/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 * 
 * initialize a fixed array with 26 slots, fill each slot with a 0
 * loop over the input string
 * capture and store the charCode of each char with .charCodeAt
 * get arrayLocationInt with charCode - 97
 * increment the value of the fixed array at arrayLocationInt by 1
 * [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 * wake = 22, 1, 11, 5
 * [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0]
 * loop over the fixed array
 * if the element is greater than 0, store the element as valueInt
 * get the charCodeInt with arrayLocationInt + 97
 * get charCodeStr from CharCodeInt with CharCodeFrom(charCodeInt)
 * while xInt is less than valueInt append charCodeStr to outputStr 
 */