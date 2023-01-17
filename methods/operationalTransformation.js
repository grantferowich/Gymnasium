/* Operational Transformation */

https://otcatchup.util.repl.co/

// Inputs:
// stale string
// latest string
// an object with instructions (insert, delete, skip) 
// for manipulating stale to look like latest

const isValid = (stale, latest, otjson) => {
    // apply updates to stale
    // check equality between stale and latest
    //get instructions takes in json 
    // get instructions outputs an array of tuples
    // with [instruction, count/chars]

    let instructions = [];
    let staleArray = stale.split('');
    let count = 0

    for (let x = 0; x < otjson.length; x++){
            if (arr[x]['insert']){
                let chars = arr[x]['chars'];
                instructions.push(['insert', chars])
            } 
            if (arr[x]['skip']){
                let count = arr[x]['count']
                instructions.push(['skip', count])
            }
            if (arr[x]['delete']){
                let count = arr[x]['count']
                instructions.push('delete', count)
            }
    }
    
    for (x = 0; x < instructions.length; x++){
        if (instructions[x][0] === 'skip'){
            count += instructions[1]
        }

    }
    

    return staleArray.join('') === latest;
  }
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
  ); // true
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
  ); // false, delete past end
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
  ); // false, skip past end
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  ); // true
    
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We can use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  ); // false
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
  ); // true