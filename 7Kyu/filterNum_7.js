function FilterString(value) {
    return Number(+value.split('').filter(n => !isNaN(n)).join(''))
  }