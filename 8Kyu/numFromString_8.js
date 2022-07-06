function getNumberFromString(s) {
    return Number(s.split('').filter(item => item >= 0).join('').split(' ').join(''))
}