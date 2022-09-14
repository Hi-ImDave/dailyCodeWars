function rentalCarCost(d) {
    let three = 20;
    let seven = 50;
    let dailyCost = 40;
    if(d < 3){
      return d * dailyCost;
    } else if(d > 2 && d < 7){
      return (d * dailyCost) - three;
    } else if(d > 6){
      return ( d * dailyCost) - seven;
    }
  }