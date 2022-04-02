function countSheeps(arrayOfSheep) {
    let num = 0;
    for(i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        num += 1
      }
    }
    return num
  }