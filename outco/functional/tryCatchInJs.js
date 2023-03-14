/* Try Catch in JS */

const arr = [];
try {
arr.push('try');
throw new Error();
} catch (e) {
arr.push('catch');
} finally {
arr.push('finally');
};

console.log(arr)
// [try, catch, finally] ✓