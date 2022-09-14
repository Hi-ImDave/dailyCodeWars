function getSum( a,b ){
    if(a === b){
      return a
    }
    let acc = 0;
    if(a < b){
    for(i = a; i <= b; i++){
      acc += i
    }
    return acc
    }
    for(i = b; i <= a; i++){
      acc += i
    }
    return acc
  }