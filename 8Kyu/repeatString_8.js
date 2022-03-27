function stringy(size) {
    let str = ''
    for(i = 0; i < size; i++){
        i % 2 === 0 ? str += '1' : str += '0'
    }
    return str 
  }