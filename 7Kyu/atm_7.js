function solve(n) {
    if (n % 10 !== 0) {
      return -1
    }
    const bills = [500, 200, 100, 50, 20, 10]
    let res = 0
    let rem = n
    while (rem > 0) {
      if (bills[0] <= rem) {
        rem = rem - bills[0]
        res++
      }
      else {
        bills.shift()
      }
    }
    return res
  }