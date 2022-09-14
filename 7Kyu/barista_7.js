function barista(coffees){
    let cleanTime = 2
    let line = coffees.sort((a, b) => a - b)
    let time = 0
    while(line.length){
        time += line[0] * line.length
        line.shift()
        time += cleanTime * line.length
    }
    return time
  }

