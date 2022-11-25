function permutationEquation(p) {
    let array = [];
    for (let i = 1; i < p.length+1; i++){
             array.push(p.indexOf(p.indexOf(i) +1) +1); 
    }
    console.log(array)
    return array;
 }
 
permutationEquation([5,2,1,3,4])  // [4,2,5,1,3]
