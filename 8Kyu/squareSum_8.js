function squareSum(numbers){
    let sum = 0
    numbers.map(number => sum += number ** 2);
    return sum
  }