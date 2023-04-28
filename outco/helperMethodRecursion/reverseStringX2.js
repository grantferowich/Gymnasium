/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */

const reverseString = (str) => {

    const reverseChar = (depth) => {
        if (depth < 0){
            return
        }
        console.log(str[depth])
        reverseChar(depth - 1)
    }
    reverseChar(str.length - 1)
}

/* TESTS */
const str1 = 'hello'
const str2 = 'wake forest'
const str3 = 'chicago'

const result1 = reverseString(str1)
const result2 = reverseString(str2)
const result3 = reverseString(str3)

/* TEST RESULTS 
o
l
l
e
h

t
s
e
r
o
f
 
e
k
a
w

o
g
a
c
i
h
c
*/