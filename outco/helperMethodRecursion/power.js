// power(3,4) => 81



function power(base, exponent) {
  
    let product = 1;
    
    const multiply = (depth) => {
      
      if (depth === exponent){
        return;
      } 
      product *= base;
      multiply(depth + 1);
    };
  
    multiply(0);
    return product;
}

console.log(power(3,4))
  