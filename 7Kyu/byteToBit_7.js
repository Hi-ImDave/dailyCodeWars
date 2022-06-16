function byteToSet (byte) {
    let result = new Set()
    let binary = convertToBinary(byte)
    for(let i = 0; i < binary.length; i++){
      if(binary[i] > 0){
        result.add(i)
      }
    } 
    
    return result;
  }
function convertToBinary(num){
    let n = num.toString(2);
    n = "00000000".substring(n.length) + n;
    return n.split('')
}


byteToSet(3)

