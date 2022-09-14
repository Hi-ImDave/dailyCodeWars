function likes(names) {
    let str = ''
    if(!names.length){
        return 'no one likes this'
    } else if(names.length == 1){
        return `${names[0]} likes this`        
    } else if(names.length == 2){
        return `${names.join(' and ')} like this`
    } else if(names.length == 3){
        names[0] += ','
        names[1] += ' and'
        return `${names.join(' ')} like this`
    } else if(names.length > 3){
        names[0] += ','
        names[1] += ' and'
        return `${names.slice(0, 2).join(' ')} ${names.length - 2} others like this`
    }
    
  }
