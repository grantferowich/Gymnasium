/* 
Stack of Boxes

CTCI 8.13

You have a stack of n boxes, with widths w, heights h, and depths d. 
The boxes cannot be rotated and can only be stacked on top of one
another if each box in the stack is strictly larger than the box above it in width,
height, and depth. Implement a method to computer the height of the tallest possible 
stack. The height of the stack is the sum of the heights of each box.
*/

const createStack = (boxes) => {

    boxes.sort(function(a, b) {
        return b.width * b.depth - a.width * a.depth
    });
    const stackMap = new Array(boxes.length).fill(0)
    return createStackHelper(boxes, null, 0, stackMap)
}

// const createStackHelper = (boxes, bottom, offset, stackMap) => {
//     if (offset >= boxes.length){
//         return 0;
//     }

//     const newBottom = boxes[offset];
//     let heightWithBottom = 0;
//     if (bottom == null || newBottom.)
// }



/* TESTS */
console.log(stackOfBoxes())

// 5.5 H