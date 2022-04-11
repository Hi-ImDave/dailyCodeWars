function whatCentury(year){
    let c = Math.ceil(year / 100).toString()
  return c.endsWith(1) && Number(c) > 19 ? `${Number(c)}st` : c.endsWith(2) && Number(c) > 19 ? `${Number(c)}nd` : c.endsWith(3) && Number(c) > 19 ? `${Number(c)}rd` : `${Number(c)}th`
}

