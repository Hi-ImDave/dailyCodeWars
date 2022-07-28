// When provided with a letter, return its position in the alphabet.
function position(letter){
    // convert input to uppercase, grab its ASCII code then subtract 64 from it to get alphabet position.
    return `Position of alphabet: ${letter.toUpperCase().charCodeAt() - 64}`
}