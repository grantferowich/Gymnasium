/*
 * 2b. Print each item in an array backwards
 *
 * Successfully tested the function April 28, 2023.
 * 
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */

const printReverse = (arr) => {

    const printOne = (depth) => {
        if (depth < 0){
            return
        }
        console.log(arr[depth])
        printOne(depth - 1)
    }
    printOne(arr.length-1)
}

/* TESTS */

const arr1 = [1,2,3]

const result1 = printReverse(arr1)

/* TEST RESULTS

3
2
1

*/