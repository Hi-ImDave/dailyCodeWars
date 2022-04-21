function spinWords(string){
    let newArr = []
    string = string.split(' ')
    for(i = 0; i < string.length; i++){
      if(string[i].length >= 5){
        newArr.push(string[i].split('').reverse().join(''))
      }else{
      newArr.push(string[i])
      }
    }
    return newArr.join(' ')
  }
