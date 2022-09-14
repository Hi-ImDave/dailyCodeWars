function squareDigits(num){
    num = num.toString()
    return Number(num.split('').map(n => n ** 2).join(''));
}