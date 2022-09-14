function sumDigPow(a, b) {
    let res = [];
    for(let i = a; i <= b; i++){
        i.toString().split('').map((num, index)=>num**(index+1)).reduce((a,b)=>a+b,0) == i ? res.push(i) : 0
    }
    return res
  }
  

