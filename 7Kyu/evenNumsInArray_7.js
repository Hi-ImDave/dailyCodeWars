function evenNumbers(array, number) {
    array = array.reverse();
    let newArray = [];
    for(i = 0; i <= array.length; i++){
      if(array[i] % 2 == 0){
        newArray.unshift(array[i]);
        if(newArray.length === number){
          return newArray
        }
      }
    }
  }