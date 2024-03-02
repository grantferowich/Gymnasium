// Successfully tested the function 1/22/23.

const stringify = (obj) => {
    // Case 1
    // invalid input
    if (obj === null) {
        return 'null';
    }

    //Case 2
    // when input is already a string => return version with "" appended
    if (typeof obj === 'string') {
        return '"'+obj+'"';
    }

    // Case 3
    // when input is an array => return an array of strings
    // use .map to apply stringify(element) to all array elements 
    if (Array.isArray(obj)) {
        return '[' + obj.map(stringify).join(',') + ']';
    }

    // Case 4
    // when input is a hash map
    // push the result of recursive stringify calls to an output array
    // return the output array joined on ','
    if (typeof obj === 'object'){
        let output = [];
        for (let key in obj){
            // convert key value pair into string
            // .hasOwnProperty returns true or false 
            // depending on whether the object contains a key
            if (obj.hasOwnProperty(key)) {
                // push string version of key
                output.push(stringify(key) + ':' + stringify(obj[key]));
            }
        }
        return '{' + output.join(',') + '}'
    }

    // otherwise return string version
    return obj.toString();
}

let person = { name: 'Thomas Hearn', affiliation: 'Wake Forest', age: 76} // {"name":"Thomas Hearn","affiliation":"Wake Forest","age":76}
console.log(stringify(person)) // 

