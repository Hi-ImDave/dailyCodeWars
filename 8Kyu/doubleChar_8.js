// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Parameters: input will be a string of any length greater than 0. may contain spaces
// Return: input string with each character duplicated 
// Example: input - doubleChar('string') return - 'ssttrriinngg'
// Pseudo Code: initialize empty variable newString to store result. iterate through input string and push character to result twice then return result


function doubleChar(str) {
    let newString = '';
    for(i = 0; i < str.length; i++){
      newString += (str[i] + str[i])
    }
    return newString
}

doubleChar('String')