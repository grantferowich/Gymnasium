// string compression
// implement a method to perform basic string compression 
// using the counts of repeated characters. For example, the string 
// 'aabcccccaaa' would become a2b1c5a3. 
// If the compressed string would not become smaller than the original string
// your method should return the original string.
// you can assume the string has only uppercase and lowercase leeters 

const stringCompressor = (s) => {
    // if s[j]is the same as s[j-1] increment local counter
    // concatenate with s[j] + Counter 
    // increment j when s[j] is not equal to s[j-1]
    for (let j = 0; j < s.length; j++ ){
        for (let k = j - 1; k < s.length; k++){
            let counter = 0
            if (s[j] === s[k]) {
                counter++;
            } 
        }
    }
    // if concatenated string is = or > in length than original string
    // return original string
}
