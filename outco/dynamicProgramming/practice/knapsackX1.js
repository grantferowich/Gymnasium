const knapsackX1 = (items, capacity) => {
    let cache = new Array(items.length);
    
    for (let x = 0; x < items.length; x++){
        cache[x] = new Array(capacity + 1).fill(-1)
    }
    
    const recurse = (cache, items, capacity, index) => {
       
        // base case
        if (capacity <= 0 || index >= items.length){
            return 0;
        }

        // recursive case
        let valueX = 0;

        // iterating through the items array with index
        // if its possible to add the current item without exceeding the capacity 
        // then add the associated value from values array to a var called valueX
        if (items[index].weight <= capacity){
            // include present item
            valueX = items[index].value + recurse(cache, items, capacity - items[index].weight, index + 1)
        }

        // exclude present item
        let valueX2 =  recurse(cache, items, capacity, index+1);
        cache[index][capacity] = Math.max(valueX, valueX2);
        return cache[index][capacity] = Math.max(valueX, valueX2)
    }
    return recurse(cache, items, capacity, 0);
}

// knapsack(items, capacity)
console.log(knapsackX1([{'weight': 6, 'values': 3}, {'weight': 6, 'values': 5}, {'weight': 6, 'values': 8}, {'weight': 6, 'values': 12}], 12)) // 20
console.log(knapsackX1([{'weight': 6, 'values': 3}, {'weight': 6, 'values': 5}, {'weight': 6, 'values': 8}, {'weight': 6, 'values': 12}], 13)) // 12
