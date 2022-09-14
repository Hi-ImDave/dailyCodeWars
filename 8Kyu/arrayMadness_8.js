function arrayMadness(a, b) {
    return a.map(a => a ** 2).reduce((a,b) => a + b, 0) > b.map(a => a ** 3).reduce((a,b) => a + b, 0)
  }