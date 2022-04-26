function tribonacci(signature,n){
    let newArray = []
    if(n === 0){
      return signature = []
    }
    if(signature.length <= 3 && n === 1){
      newArray.push(signature[0])
      return newArray
    }
    for(i = 2; i < n - 1; i++){
      signature.push(signature[i] + signature[i - 1] + signature[i - 2])
    }
    return signature
  }