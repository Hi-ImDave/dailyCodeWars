function positiveSum(arr) {
    let num = 0;
    for(i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        num += Number(arr[i])
      }
    }
    return num
  }