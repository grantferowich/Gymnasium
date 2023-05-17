/*
 *  Attempted the function May 16, 2023.
 *   
 * 
 *  BitFlip
 * 
 *  
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made. 
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 *  
 *  Initialize the leftPtrInt and rightPtrInt
 *  Expand while the number of flipped 1s is less than or equal to the input int
 *  Contract while the number of flipped 1s is greater than the input int 
 *  Keep track of resultLeftInt and resultRightInt
 *  
 * 
 */

const bitflipAdvanced = (arr, int) => {

    let flipBudgetInt = 0;
    let leftPtrInt = 0;
    let rightPtrInt = 0;
    let countInt = 0


    while (rightPtrInt < arr.length){

        if (arr[rightPtrInt] === 0){
            flipBudgetInt++;
        }

        

        if (flipBudgetInt > int){
            // update result
            if (rightPtrInt - leftPtrInt > countInt){
                countInt = rightPtrInt - leftPtrInt;
            }
            if (arr[leftPtrInt] === 0){
                flipBudgetInt--;
            }
            leftPtrInt++
        }
        
        rightPtrInt++
    }
    return countInt;
}

/* Test */

const arr1 = [0,1,1,1,0,1,0,1,0,0];
const int1 = 2;

const resultInt1 = bitflipAdvanced(arr1, int1);


console.log(`Result 1: ${resultInt1}`)

/* Test results */