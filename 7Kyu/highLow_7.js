function highAndLow(numbers){
    let numbs = numbers.split(' ')
    let min = Math.min(...numbs).toString()
    let max = Math.max(...numbs).toString()
    return `${max} ${min}`
  }