/* 
Rotate Matrix


03/18/23
*/


const rotateMatrix = (matrixArr) =>{
    let lPtr = 0
    let rPtr = matrixArr.length - 1;

    while (lPtr < rPtr){
        for (let x = 0; x < rPtr - lPtr; x++){
            let top = lPtr
            let bottom = rPtr

            // save the top left
            let topLeft = matrixArr[top][lPtr + x]

            // move bottom left into top left
            matrixArr[top][lPtr + x] = matrixArr[bottom - x][lPtr]

            // move bottom right into bottom left 
            matrixArr[bottom - x][lPtr] = matrixArr[bottom][rPtr - x]

            // move top right into bottom right
            matrixArr[bottom][rPtr - x] = matrixArr[top + x][rPtr]

            // move top left into top right
            matrixArr[top + x][rPtr] = topLeft;

            rPtr-=1
            lPtr+=1

        }
    }

    return matrixArr
}

const data1 = [[ 1, 2, 3],
[ 4, 5, 6],
[ 7, 8, 9]]
const test1 = rotateMatrix(data1)
console.log(`Test 1: ${test1}`)