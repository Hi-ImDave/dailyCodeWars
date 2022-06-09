// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Parameters: input will be an array with length greater than 0 consisting of numbers. 
// Return: new array consisting of elements which are multiples of their own index from the input array
// Example: input - multipleOfIndex([22, -6, 32, 82, 9, 25]) return - [-6, 32, 25]
// Pseudo Code: filter input array by any number that can be divided by its index && have a remainder of 0 then return the new array


function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
}

multipleOfIndex([22, -6, 32, 82, 9, 25])