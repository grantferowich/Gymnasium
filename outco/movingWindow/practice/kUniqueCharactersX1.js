// Successfully tested the function 1/18/23.

const kUniqueChars = (s) => {
    let k = parseInt(s[0]);
    let str = s.slice(1);
    let startOfWindow = 0;
    let maxLength = 0;
    let currentCount = 0;
    let hash = {};
    for (let endOfWindow = 0; endOfWindow < str.length; endOfWindow++) {
        
        // hunting phase
        if (!hash[str[endOfWindow]]) {
            currentCount++;
            hash[str[endOfWindow]] = true;
        }else{
            hash[str[endOfWindow]]++;
        }

        // catchup phase
        while (currentCount > k) {
            if(hash[str[startOfWindow]] == 1){
                currentCount--;
                delete hash[str[startOfWindow]];
            }else{
                hash[str[startOfWindow]]--;
            }
            startOfWindow++;
        }
        maxLength = Math.max(maxLength, endOfWindow - startOfWindow + 1);
    }
    return maxLength;
}



const input = "3aabbxxyyy";
console.log(kUniqueChars(input)); // 7
const input2 = "2eceba";
console.log(kUniqueChars(input2)) // 3
