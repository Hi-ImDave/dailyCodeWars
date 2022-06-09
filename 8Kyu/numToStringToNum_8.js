// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)
// Parameters: two inputs (a, b) in the form of strings
// Return: sum of the inputs in the form of a string.
// Example: input - sumStr('4', '5') return - '9'
// Pseudo Code: convert inputs to numbers, add numbers together and return sum converted to string


function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

  sumStr('4', '5')