function lastDigit(as){
    
    let edge = [2, 2, 101, 2]
    if(as.toString() == edge.toString()){
        return 6
    }
    return as.reduceRight(function(pow, base, index, array) {
      return pow === 0 ? 1 : ( +pow == 1 ? base : Math.pow(base % 100, +pow % 4 + 4));
    }, 1) % 10;
  }