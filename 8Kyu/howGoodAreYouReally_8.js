function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    classPoints.forEach(i => {sum += i});
    sum = sum / classPoints.length;
    return yourPoints > sum;
  }