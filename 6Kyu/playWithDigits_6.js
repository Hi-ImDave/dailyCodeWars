function digPow(n, p){
    let arr = n.toString().split('')
    for(let i = 0; i < arr.length; i++, p++){
        arr[i] = arr[i]**p
    }
    let sum = arr.reduce((a,b)=>a+b,0)
    let k =  sum / n
    return k % 1 == 0 ? k : -1
  }


