// given a set of positive integers determine whether the array
// can be partitioned into two arrays whose sums are the same

// Solution: if elements can be summed to equal half the 
// total sum of the elements in an array


// for a Sum , two sets s1 and s2 must equal Sum
// Sum therefore equals 2 * s1 or 2 * s2
// To recurvsively solve the problem
// check if the summed elements is even
// if the summed elements counter is NOT even
// then return false 
// else loop until returning true 


const equalSubset = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    if (sum % 2 !== 0){
        return false
    }
    return findPartition(array, sum/2, 0)
}}

const findPartition = (array, sum, idx) => {
        if (sum === 0) return true;
        if ( array.length === 0 || idx >= array.length) return false;
        // recursive call including the element at the current idx
        if (array[idx] <= sum){
            if(findPartition(array, sum - array[idx], idx+1)) return true;
        }
        // recursive call excluding the element at the current idx
        return findPartition(array, sum, idx+1)
}



// equalSubset([2,3,4,6]) // => false 

module.exports = equalSubset