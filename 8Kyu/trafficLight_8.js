function updateLight(current) {
    if(current.toLowerCase() == 'green'){
      return 'yellow';
    } else if(current.toLowerCase() == 'yellow'){
      return 'red'
    }
    return 'green'
  }