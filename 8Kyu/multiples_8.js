function findMultiples(integer, limit) {
    let arr = [];
    for(i = limit; i >= integer; i--){
      if(i % integer === 0){
        arr.push(i)
      }
    }
    return arr.reverse()
  }