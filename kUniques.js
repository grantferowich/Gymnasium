// Find the longest substring with k unique characters in a given string
// assume the input parameter is a string and k, an integer

//Solution: use a moving window, with two counters
// for each new element in the window increase the dictionary object with a key
// if the number of keys in the dictionary is greater than k
// re-start the window at a higher index

const longestKSubstr = ( s, k ) => {
    
    // if (s.length == 0 || k == 0) {
    //     console.log("0");      )
    //     return 0;
    // };

    let hash = {};
    let startOfWindow = 0;
    let currentWindowLength = 0;
    let maxLength = 1;

    for (i = 0; i < s.length - 1; i++ ) {
        let char = s[i];
        hash[char] = i;

        if (hash.keys > k) {
            delete hash;
            startOfWindow ++;
        }
        
        currentWindowLength = i - startOfWindow;
        maxLength = Math.max(currentWindowLength, maxLength)
    }

    console.log('max length is ', maxLength);
    return maxLength;
}

longestKSubstr("eceba", 2) //3 
longestKSubstr("araaci", 2) //4 