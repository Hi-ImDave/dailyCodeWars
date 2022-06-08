// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// Parameters: input will be a string in the form of two capital letters with no whitespace
// Return: If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
// Example: input - chromosomeCheck('XY') return - "Congratulations! You're going to have a son."
// Pseudo Code: since there can only be one of two possible returns, can use a ternary operator that returns the correct string based on the last element of the input string.


function chromosomeCheck(sperm) {
    return sperm.endsWith('Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

chromosomeCheck('XY')