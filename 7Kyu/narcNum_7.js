function isNarcissistic(n){
    let power = n.toString().length;
    return n.toString().split('').map(x => Number(x)**power).reduce((a,b)=>a+b,0) === n ? true : false
  }

