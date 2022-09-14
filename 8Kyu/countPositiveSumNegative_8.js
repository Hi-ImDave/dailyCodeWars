function countPositivesSumNegatives(input) {
    let array = [];
    if(input == null || input.length === 0){
      return array;
    }
    let posNums = 0;
    let negNums = 0;
    for(i = 0; i < input.length; i++){
      if(input[i] > 0){
        posNums += 1;
      }
      if(input[i] < 0){
        negNums += Number(input[i]);
      }
      
    }
    array.push(posNums)
    array.push(negNums)
    return array
}