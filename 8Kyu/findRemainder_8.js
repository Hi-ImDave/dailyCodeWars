function remainder(n, m){
    return n > m ? n % m : n < m ? m % n : n === 0 || m === 0 ? NaN : 0
    
  }