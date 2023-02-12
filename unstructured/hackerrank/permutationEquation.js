function permutationEquation(p) {
    let array = [];
    let l = p.length+1;
    for (let i = 1; i < l; i++){
             array.push(p.indexOf(p.indexOf(i) +1) +1); 
    }
    // console.log(array);
    return array;
 }
 
//  permutationEquation([5,2,1,3,4])
module.exports = permutationEquation 
