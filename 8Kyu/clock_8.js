function past(h, m, s){
    let t = 0
    h = h * 3600000;
    m = m * 60000;
    s = s * 1000;
    t = h + m + s;
  
  return t
  }