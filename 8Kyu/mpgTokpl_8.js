function converter (mpg) {
    if(mpg == 0){
        return 0
    }
    let kpl = Number(((mpg / 4.54609188) * 1.609344).toFixed(2))
    return kpl.toString().endsWith(0) ? kpl.slice(0, -1) : kpl
  }

 