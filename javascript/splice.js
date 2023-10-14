function reverseArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        console.log('i...', i);
        console.log('arr[i]...', arr[i]);

        const removedElement = arr.splice(i, 1)[0];
        console.log('removedElement...', removedElement);
        arr.unshift(removedElement);
    }
    return arr;
}

const myArray = [3, 5, 8, 13];
const reversedArray = reverseArray(myArray);

console.log(reversedArray); // Output: [ 13, 8, 5, 3 ]