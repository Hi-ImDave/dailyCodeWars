function divisibleBy(numbers, divisor){
    let newArr = []
    for(i = 0; i < numbers.length; i++){
        if(numbers[i] % divisor === 0){
            newArr.push(numbers[i])
        }
    }
    return newArr
}