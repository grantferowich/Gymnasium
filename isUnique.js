//implement an algorithm to determine if a string has all unique characters.
// What if you cannot use an additional data structure?

// isUnique("axx")
// expected output: false

// isUnique("abc")
// expected output: true

const isUnique = (s) => {
    let hash = {}


   for (let i = 0; i < s.length; i++){
        value = s[i];
        if ( hash[value]) {
            console.log('false');
            return false
        } 
        hash[value] = true;
   }
   console.log('true')
   return true
}

isUnique("axx") // false 
isUnique("abc") // true 


