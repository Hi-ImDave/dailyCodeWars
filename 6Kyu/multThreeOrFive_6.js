function solution(number){
    if(number < 0){
      return 0
    }
    let newArr = [];
    for(i = 0; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        newArr.push(i)
      }
    }
    return newArr.reduce((a, b) => a + b, 0)
  }