function getMissingElement(superImportantArray){
    const reducer = (accumulator, curr) => accumulator + curr;
    let sum = superImportantArray.reduce(reducer);
    return 45 - sum
  }