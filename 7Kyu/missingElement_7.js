function findMissing(arr1, arr2) {
    arr1 = arr1.reduce((a, b) => a + b, 0)
    arr2 = arr2.reduce((a, b) => a + b, 0)
    return  arr1 - arr2 
  }