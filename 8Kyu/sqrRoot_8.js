function squareOrSquareRoot(array) {
    return array.map(x => {
      const n = Math.sqrt(x)
      return Number.isInteger(n) ? n : x * x
    })
  }