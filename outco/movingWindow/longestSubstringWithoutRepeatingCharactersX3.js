
var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
   // result 
   // let leftResult = 0;
   // let rightResult = 0;
   let len = 0
   // 2 pointers
   let leftPtr = 0;
   let rightPtr = 0;
   // to do : keep tack of duplicates
   let duplicate = 0;


   // 1. Move right 
   while ( rightPtr < s.length){
       let rChar = s[rightPtr]
       // add to map
       let frequency = charMap.has(rChar) ? charMap.get(rChar) : 0
       charMap.set(rChar, frequency + 1)
       // check if the char is a duplicate
       if (charMap.get(rChar) > 1){
           duplicate++;
       }
       // increment rightPtr
       rightPtr++;
       
       // 2. Move left when duplicate has been found 
       while (duplicate !== 0){
           let lChar = s[leftPtr];
           // if lChar is duplicate
           if (charMap.get(lChar) > 1){
               duplicate--
           }
           // update the charMap
           charMap.set(lChar, charMap.get(lChar) -1)
           if (charMap.get(lChar) === 0){
               charMap.delete(lChar)
           }
           leftPtr++ 
       }
       // when should we compare with result
       if (rightPtr - leftPtr > len){
           len = rightPtr - leftPtr
       }
   }

   return len
};