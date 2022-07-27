function maps(x){
    let y = []
    for(i = 0; i < x.length; i++){
      let newItem = x[i] * 2
      y.push(newItem)
    }
    return y
  }