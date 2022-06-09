// Complete the function that takes an input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )
// Parameters: one input (n) will be a non-negative integer
// Return: an array (result) of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )
// Example: input - powersOfTwo(4) return - [1, 2, 4, 8, 16]
// Pseudo Code: initialize result as empty array then iterate from 0 to n, each iteration pushes result of 2 to i power then return result


function powersOfTwo(n){
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }

  powersOfTwo(4)