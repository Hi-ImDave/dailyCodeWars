var countSheep = function (num){
    let word = ''
    if(num === 0){
      return ''
    }
    for( i = 1; i <= num; i++){
      word += `${i} sheep...`
    }
    return word
  }