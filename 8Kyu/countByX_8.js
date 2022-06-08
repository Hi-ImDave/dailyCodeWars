// Create a function with two arguments that will return an array of the first (n) multiples of (x). 
// Parameters: both the given number and the number of times to count will be positive numbers greater than 0
// Return: Return the results as an array
// Example: input - countBy(1,10) return - [1,2,3,4,5,6,7,8,9,10]
// Pseudo Code: initialize an empty array to store the results in, then iterate through (n) number of times, each iteration pushing the result of (increment * x) to empty array and return result


function countBy(x, n) {
    let z = [];
    for(i = 1; i <= n; i++){
      z.push(i * x)
    }
    return z;
}

countBy(1, 10)