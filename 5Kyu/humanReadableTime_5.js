function humanReadable (seconds) {
    let hh = Math.floor(seconds / 3600)
    let mm = Math.floor(((seconds / 3600) - hh) * 60)
    let ss = Math.round(((((seconds / 3600) - hh) * 60) - mm) * 60)
    mm == 60 ? mm = 0 && hh + 1 : mm
    ss == 60 ? ss = 0 && mm + 1 : ss
    if(hh.toString().length < 2){
        hh = '0' + hh
    }
    if(mm.toString().length < 2){
        mm = '0' + mm
    }
    if(ss.toString().length < 2){
        ss = '0' + ss
    }
    return `${hh}:${mm}:${ss}`
  }