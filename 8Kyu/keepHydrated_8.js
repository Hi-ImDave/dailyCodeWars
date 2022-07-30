function litres(time) {
    let consumption = 0;
    let amountOfWater = 0.5;
    consumption = time * amountOfWater;
    consumption = Math.floor(consumption);
    return consumption;
  }