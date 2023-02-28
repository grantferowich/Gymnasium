/* 

NEXT GREATER ELEMENT I
a.k.a. Next Greater Element with Brute Force
This solution is the quadratic solution.

Successfully tested the function 2/23/23.
Complexity analysis: 
Time: O(N^2)
Space: O(N)

input: nums1 = [4,1,2], nums2 = [1,3,4,2]
output: [ -1 , 3, -1 ]
*/

const nextGreaterElement = (nums1 = [], nums2 = []) => {
    
    if (nums1.length === 0 || nums2.length === 0){
        return [];
    }

    let output = [] 
    let index1 = 0;

    while (index1 < nums1.length){
        let val = nums1[index1]
        let index2 = nums2.indexOf(val);
        let g = index2 + 1;
        let nextGreater = -1
        let nextGreaterIndex = -Infinity
        while (g < nums2.length){
            if (nums2[g] > val){
                nextGreater = nums2[g]
                nextGreaterIndex = g;
                break
            }
            g++;
        }
        output.push(nextGreater)
        index1++
    }
    return output;
}   

/* TESTS */

const nums1a = [ 4, 1, 2 ]
const nums2a = [ 1, 3, 4, 2 ]
const result = nextGreaterElement(nums1a, nums2a)
console.log('result', result) // [ -1, 3, -1]


const nums1b = [1,3,5,2,4];
const nums2b = [6,5,4,3,2,1,7];
const result2 = nextGreaterElement(nums1b, nums2b)
console.log('result 2', result2) // [ 7, 7, 7, 7, 7 ]

