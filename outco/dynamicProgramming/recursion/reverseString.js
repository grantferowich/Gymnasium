function reverseString(str){
  
    const printChar = (str, depth) => {
      if (depth < 0){
        return
      }
      console.log(str[depth])
      printChar(str, depth - 1)
    }
    printChar(str, str.length - 1);
  
}

reverseString('hello')