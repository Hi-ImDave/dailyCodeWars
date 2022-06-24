const reverseSeq = n => {
    let newArray = [n];
    for(i = n - 1; i > 0; i--){
      newArray.push(i)
    }
   
    return newArray;
  };