function alphanumeric(string){
    if (string === null || string === undefined || !string.length ){
      return false
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlphabet = alphabet.toUpperCase()
    const numbers = '0123456789'
    for (let i = 0; i < string.length; i++) {
      if (!alphabet.includes(string[i]) && 
          !upperAlphabet.includes(string[i]) &&
          !numbers.includes(string[i])) {
  //       console.log(string[i])
        return false
      }
    }
    return true
  }