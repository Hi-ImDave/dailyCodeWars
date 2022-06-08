// Complete the function which converts hex number to a decimal number.
// Parameters: input will be a string in hexidecimal format
// Return: converted decimal number as an integer
// Example: input - hexToDec("a") return - 10
// Pseudo Code: use parseInt to parse (hexString) with a radix of 16


function hexToDec(hexString){
    return parseInt(hexString, 16)
}

hexToDec("a")