function multiply(number){ 
    let pos = 0
    if(number < 0){
      pos = number *= -1
      pos = pos.toString()
      pos = pos.length
      return -number * (5 ** pos)
    }
    let num = number.toString()
    num = num.length
    return number * (5 ** num)
  }