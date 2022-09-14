function XO(str) {
    let x = 0
    let o = 0
    for(i = 0; i < str.length; i++){
      if(str[i] == 'x' || str[i] == 'X'){
        x += 1
      } else if(str[i] == 'o' || str[i] == 'O'){
        o += 1
      }
    }
    return x == o
  }