function getAverage(marks){
    let count = 0
    let mean = 0
    let number = 0
    let total = 0
    for(i = 0; i < marks.length; i++){
      number = Number(marks[i])
      total += number
      count++
    }
    mean = total / count
    mean = Math.trunc(mean)
    return mean
  }