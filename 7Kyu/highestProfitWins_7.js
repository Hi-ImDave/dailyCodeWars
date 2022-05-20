function minMax(arr){
    let newArray = []
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    newArray.push(min, max)
    return newArray
  }