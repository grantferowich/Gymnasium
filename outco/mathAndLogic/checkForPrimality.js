/* 
Check For Primality

Successfully tested the function 03/13/23.
Input: an integer
Output: true if the number is prime, false if the number is not prime
*/

const checkForPrimality = (integer) => {
    if (isNaN(integer)){
        return false
    }

    if (integer < 2){
        return false
    }
    for (let x = 2; x < integer; x++){
        
        if (integer % x == 0){
            return false
        }
    }
    return true
}

/* TESTS */

let data1 = checkForPrimality(3)
console.log('Test 1:', data1)
// expect true ✓

let data2 = checkForPrimality(undefined)
console.log('Test 2:', data2)
// expect false ✓

let data3 = checkForPrimality(9)
console.log('Test 3:', data3)
// expect false ✓

let data4 = checkForPrimality(17)
console.log('Test 4:', data4)
// expect true ✓
