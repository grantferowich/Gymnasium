// suppose we want to know the size of the call stack
// the call stack refers to the stack of operations that may be performed
// in LIFO order. The number of recursive calls a function implementing recursion may use is
// constrained by the call stack size.

let count = 0;
try {
    function foo(){
        count += 1;
        foo();
    }
    foo();
} catch(error){
    console.log(error)
    console.log('count =', count)
}

// there are 13,448 calls in the call stack when tested on 12/18/22