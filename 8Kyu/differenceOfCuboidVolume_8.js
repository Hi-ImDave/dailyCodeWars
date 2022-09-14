function findDifference(a, b) {
    return Math.abs(a.reduce((total, acc) => total * acc) - b.reduce((total, acc) => total * acc))
  }