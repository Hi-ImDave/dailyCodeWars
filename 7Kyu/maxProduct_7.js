function adjacentElementsProduct(array) {
    let product = -Infinity
    for(a = 0, b = 1; b < array.length; a++, b++){
      if((array[a] * array[b]) > product){
        product = array[a] * array[b]
      }
    }
    return product
  }