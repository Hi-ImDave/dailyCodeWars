function sumDigits(number) {
    let num = Math.abs(number);
    let str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += +str[i]
    } return sum
  }