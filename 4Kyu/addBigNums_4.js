function add(a, b) {
    const aL = a.length
    const bL = b.length
    const mL = Math.max(aL, bL)
  
    let carry = 0, sum = ''
  
    for (let i = 1; i <= mL; i++) {
      let A = +a.charAt(aL - i)
      let B = +b.charAt(bL - i)
  
      let t = carry + A + B
      carry = t/10 |0
      t %= 10
  
      sum = (i === mL && carry)
        ? carry*10 + t + sum
        : t + sum
    }
  
    return sum
  }