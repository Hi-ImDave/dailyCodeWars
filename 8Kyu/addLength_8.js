// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Parameters: a string of any length greater than 0, words will be separated by spaces
// Return: an array with each word along with the length of that word
// Example: input - addLength('apple ban') return - ['apple 5', 'ban 3']
// Pseudo Code: split the input string by the spaces, then iterate through the resulting array and concatenate each word with a space and its length then return that array.


function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
}

addLength('apple ban')