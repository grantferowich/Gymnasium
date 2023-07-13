/* 
Sezzle take home test 
July 13, 2023
Your solution(s) should consider all possible corner cases 
and handle large input efficiently. Passing the example test 
does not indicate that your solution is correct.
The example test is not part of your final score.

Your solution(s) should consider all possible corner cases and handle large input efficiently.
Passing the example test does not indicate that your solution is correct. 
The example test is not part of your final score.

Input: str
output: integer

Find the minimum number of water tanks needed to collect rainwater from all of the houses.

Input: str = '-H-HH--'
Output: 2 
Why? 
Tanks can be place at the third slot
and the sixth slot. The result is "-HTHHT-".
Two is the smallest number of Tanks which
can be placed which also ensures rainwater
will be collected from every house.

Sliding window problem.
First, count up the number of H's.
The number of H's is necessary to find out the smallest number of Ts.
The smallest window is the window where 
all of the H's are included, and every house is one which is connected to a 
water collector. 
How do you ensure every house has a collecter attached?
Loop over the window. Does each H have a "T" to its left OR its right?
If a house does not have a "T" to its left AND it does not have a "T" to its right,
then the window is not valid. 
If each H has a T to its left OR its right, then the window is valid.
If the window is valid, check if the window is the smallest window.
If the current window is smaller than the smallest window so far, 
update the smallest number of tanks required on the street.

If the window is valid, is there a way to remove Ts and maintain a valid window?
Perhaps there should be a helper function which determines a valid window,
which takes in a string, and outputs true or false. 


const str4 = "-H-H-H-H-H"; // 3
One valid way" -HTH-HTHTH; // 
there are initially 5 Hs and 5 empty plots.
Since 

If the window is valid including Ts,
loop over the window
if a T can be removed AND the window stays valid, 
set minimumInt to the number of Ts in the window. 


Start by setting each - to be a T.
Now, check if the string is valid
    -> a tree is valid if each H has a T either to its right or left.
If the string is not valid, return -1.
If the string is valid, cache the number of Ts.
Now, go through the string, replacing Ts with -s.
    -> Is the string a valid window? 
    -> if yes, set the minimum number of tanks to be the number of tanks in the plot.

*/


const windowIsValid = (arr) => {
    let xInt = 0;
    let isValidToF = true;
    while (xInt < arr.length){
        let char = arr[xInt];
        if ((char === "H" && arr[xInt - 1] !== "T") && (char === "H" && arr[xInt + 1] !== "T")){
            isValidToF = false
            break
        } 
        xInt++ 
    }
    return isValidToF;
}
const minimumWaterTanks = (str) => {
    // valid input
    if (str === null || str === undefined || str === '' || str.length === 0){
        return -1;
    }
    
    let xInt = 0;
    let tanksInt = 0
    let arr = str.split('')
    while (xInt < arr.length){
        let element = str[xInt];
        if (element === "-"){
            arr.splice(xInt, 1, "T");
            tanksInt++
        }
        xInt++
    }
    console.log('arr', arr)
    let fullInstallationStateValidToF = windowIsValid(arr)
    if (fullInstallationStateValidToF === false){
        return -1
    }
    // console.log('fullInstallationStateIsValidToF', fullInstallationStateValidToF)
    // console.log('tanksInt', tanksInt)
    xInt = 0
    while (xInt < arr.length){
        if (arr[xInt] === "T"){
            arr.splice(xInt, 1, "-")
            if (windowIsValid(arr)){
                tanksInt--
                xInt++
            } else {
                arr.splice(xInt, 1, "T")
            }
        }
        xInt++
    }
    if (tanksInt === 0){
        return -1
    } else {
        return tanksInt
    }
}

/* Tests */
const str1 = "-H-HH--"; // 2
const str2 = "H"; // -1
const str3 = "HH-HH"; // -1
const str4 = "-H-H-H-H-H"; // 3

const resultInt1 = minimumWaterTanks(str1);
const resultInt2 = minimumWaterTanks(str2);
const resultInt3 = minimumWaterTanks(str3);
const resultInt4 = minimumWaterTanks(str4);

console.log('Result 1:', resultInt1)
console.log('Result 2:', resultInt2)
console.log('Result 3:', resultInt3)
console.log('Result 4:', resultInt4)