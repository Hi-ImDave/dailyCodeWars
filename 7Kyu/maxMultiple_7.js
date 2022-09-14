function maxMultiple(divisor, bound){
    for(n = bound; n > 0; n--){
      if(n % divisor === 0 && n <= bound && n > 0){
        return n
      }
    }
  }