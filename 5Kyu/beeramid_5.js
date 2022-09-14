function beeramid(bonus, price) {
    let beers = Math.floor(bonus / price)
    let levels = 0
    for(let i = 1; beers - (i ** 2) >= 0; i++){
        beers = beers - (i ** 2)
        levels++  
    }
    return levels
  }

