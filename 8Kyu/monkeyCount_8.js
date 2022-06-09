// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// Parameters: input (n) will be an integer greater than 0
// Return: new array populated with all numbers up to and including (n), excluding zero
// Example: input - monkeyCount(n) return - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Pseudo Code: initialize empty array to push results to then iterate from 1 to (n) pushing each number to results array then return that array


function monkeyCount(n) {
    let newArray = [];
    for(i = 1; i <= n; i++){
      newArray.push(i);
    }
    return newArray;
};

monkeyCount(n)