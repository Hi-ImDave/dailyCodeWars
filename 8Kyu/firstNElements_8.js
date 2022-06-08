// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
// Parameters: a non-empty array (arr) and a number as an integer (n)
// Return: fhe first (n) elements of input array (arr)
// Example: input - take([0, 1, 2, 3, 5, 8, 13], 3) return - [0, 1, 2]
// Pseudo Code: return input array sliced from 0-index to (n)-index


function take(arr, n) {
    return arr.slice(0, n)
}

take([0, 1, 2, 3, 5, 8, 13], 3)