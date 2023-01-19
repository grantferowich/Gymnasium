
// solve the knapsack problem where the input is an object of key-value pairs 
// the objects have two properties: weight: number, value: number
// an example input is [{'weight': 6, 'values': 3}, {'weight': 6, 'values': 5},
// {'weight': 6, 'values': 8}, {'weight': 6, 'values': 12}]

const knapsackX2 = (object, capacity) => {
    // instantiate a cache
    let cache = {};

    const recurse = (cache, object, capacity, index) => {

        if (capacity <= 0 || index >= object.length){
            return 0;
        }
    
        let key = index + "_" + capacity;
        // check cache for subsolution
        if (key in cache){
            return cache[key];
        }
        let valueX = 0;
        // recursive case: add present item
        if (object[index].weight <= capacity){
            valueX = object[index].values + recurse(cache, object, capacity - object[index].weight, index + 1)
        }
        // recursive case: exclude present item
        let valueX2 = recurse(cache, object, capacity, index + 1);
        cache[key] = Math.max(valueX, valueX2);
        return cache[key];
    }
    return recurse(cache, object, capacity, 0)
}


console.log(knapsackX2([{'weight': 6, 'values': 3}, {'weight': 6, 'values': 5}, {'weight': 6, 'values': 8}, {'weight': 6, 'values': 12}], 12)) // 20
console.log(knapsackX2([{'weight': 6, 'values': 3}, {'weight': 6, 'values': 5}, {'weight': 6, 'values': 8}, {'weight': 6, 'values': 12}], 12)) // 12
