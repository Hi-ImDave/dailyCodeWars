// Your job is to write an algorithm that gets you from the input to the output.
// Parameters:a positive integer, n, greater than or equal to one
// Return: array of postitive integers from 1 to n (inclusive)
// Example: input - preFizz(5) return -  [1,2,3,4,5]
// Pseudo Code: initialize empty array then iterate through numbers 1 to n, push each number to array, return array


function preFizz(n) {
    let arr = []
    for(i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }

  preFizz(5)