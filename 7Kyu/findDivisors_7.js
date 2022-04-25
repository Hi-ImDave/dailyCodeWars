function divisors(integer) {
    let newArray = [];
    for(i = 2; i < integer; i++){
      if(integer % i === 0){
        newArray.push(i)
      }
      }
      if(newArray.length === 0){
      return integer + ' is prime'
      } else{
        return newArray
      }
  }