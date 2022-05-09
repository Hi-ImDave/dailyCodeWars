function paperwork(n, m) {
    let paper = 0
    if(n < 0 || m < 0){
      return 0;
    } else{
       paper = n * m
    }
    return paper
  }