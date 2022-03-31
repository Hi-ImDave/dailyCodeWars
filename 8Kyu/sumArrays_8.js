function sum (numbers) {
    let theSum = 0;
    for(i = 0; i < numbers.length; i++){
      theSum += Number(numbers[i])
    }
    return theSum  
      
  }