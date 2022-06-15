function toQueryString (obj) {
    let result = '' 
    for(let key in obj){ 
      if(typeof obj[key] === 'object'){ 
        for(let i = 0; i < obj[key].length; i++){ 
            result+= `${key}=${obj[key][i]}&` 
        }
      } else {
        result += `${key}=${obj[key]}&` 
      } 
      
    }
    return result.endsWith('&') ? result.slice(0, result.length - 1) : result
  }

  toQueryString({ foo: 1, bar: 2 })