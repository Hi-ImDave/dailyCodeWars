function find_average(array) {
    let num = 0;
    if(array.length == 0){
      return 0;
    }
    for(i = 0; i < array.length; i++){
      num += array[i]
    }
    return num / array.length
  }