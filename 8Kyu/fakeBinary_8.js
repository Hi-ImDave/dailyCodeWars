function fakeBin(x){
    let newString = '';
    for(i = 0; i < x.length; i++){
      x[i] = Number(x[i]);
      if(x[i] < 5){
        newString += 0;
      } else{
        newString += 1;
      }
    }
    return newString;
  }