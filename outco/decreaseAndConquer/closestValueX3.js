function closestValue(arr, target) {
    let closest = Infinity;
    let value = null;
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
    //   let midpoint = parseInt(start + parseInt((end - start)/2));
      let midpoint = parseInt((end + start)/2)
      let difference = Math.abs(target - arr[midpoint]);
      if (difference < closest) {
        closest = difference;
        value = arr[midpoint];
      }
      if (arr[midpoint] < target) {
        start = midpoint + 1;
      } else {
        end = midpoint - 1;
      }
    }
    return value;
}
  

const dataArr1 = [1, 2, 3, 5, 5, 7, 9, 10, 11]
const targetInt1 = 6
const dataArr2 = [1, 2, 3]
const targetInt2 = 8
const dataArr3 = [1, 10, 22, 59, 67, 72, 100]
const targetInt3 = 70

const result1 = closestValue(dataArr1, targetInt1)
const result2 = closestValue(dataArr2, targetInt2)
const result3 = closestValue(dataArr3, targetInt3)

console.log(`Result 1: ${result1}`)
console.log(`Result 2: ${result2}`)
console.log(`Result 3: ${result3}`)