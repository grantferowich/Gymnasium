/* Stack of Boxes
partially tested the code 3/23/23.
*/

const stackOfBoxes = () => {
    const computeH = (hInt, nextHInt, runningSumInt) => {
        if (nextHInt === 0){
            return runningSumInt
        }
        runningSumInt += parseFloat(nextHInt/hInt)
        return computeH(hInt, nextHInt-1, runningSumInt)
    }
    return computeH(10, 10, 0)
}