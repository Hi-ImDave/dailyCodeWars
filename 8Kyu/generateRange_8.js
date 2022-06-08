// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max by step
// Parameters: a minimum value (min) a maximum value (max) a step value (step).
// Return: an array with values min-max by step
// Example: input - generateRange(2, 10, 2) return - [2,4,6,8,10]
// Pseudo Code: create an empty array to store results in then iterate through inputs from min to max, incremented by step pushing each value to results array then return result


function generateRange(min, max, step){
    let range = []
    for(let i = min; i <= max; i += step){
        range.push(i)
    }
    return range
}

generateRange(2, 10, 2)