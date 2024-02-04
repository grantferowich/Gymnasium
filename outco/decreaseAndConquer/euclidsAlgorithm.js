/* 
*Euclid's Algorithm

* Successfully tested the function 03/17/2023.
* Successfully tested the function on 02/04/2024.
*Given A and B take the difference of A and B to find the greatest common divisor.
* To find the GCD of 78 and 52 

* 1, (A , B)
* 2, A - B = C
* 3, (B, C)
* 4, repeat 1-3 until C === 0
* 5, when C === 0 return A

* (78, 52 ) 78 - 52 = 26
* (52, 26) 52 -26 = 26
* (26, 26) 26-26 = 0
* (26, 0)  ==> // return console.log(26)
* Euclid's algorithm states the GCD of (A, 0) will always be A. 

* if a is not larger than b
* swap A and B
* Complexity Analysis
* Time Complexity: O(logN)
* Space Complexity: O(1)
 */
const gcd = (aInt, bInt) => {
    // ensure inputs are positive
    if (aInt < 0) { aInt *= -1};
    if (bInt < 0) { bInt *= -1};
    // ensure A is larger than B
    if ( aInt < bInt){
        [aInt, bInt] = [bInt, aInt]
    }
    // for (A,B) take the difference of the two integers
    // then set the new pair to (b, difference)
    while (bInt > 0){
        let tempInt;
        tempInt = aInt - bInt;
        [aInt, bInt] = [bInt,tempInt];
    }
    return aInt;
}
console.log('hi')
const int1 = gcd(78,52)
console.log(`Int 1 is: ${int1}`);
// expected output: 26
// actual output: 26