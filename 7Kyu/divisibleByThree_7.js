function divisibleByThree(str){
    let nums = str.split('').map(num => Number(num)).reduce((a, b) => a + b)
    return nums % 3 === 0
}