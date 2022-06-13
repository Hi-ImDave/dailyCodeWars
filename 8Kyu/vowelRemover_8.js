function shortcut (string) {
    return string.split('').filter(letter => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u').join('')
    
    
}