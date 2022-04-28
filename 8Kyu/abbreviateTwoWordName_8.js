function abbrevName(name){
    let initials = name[0] + '.' 
    for(i = 0; i < name.length; i++){
      if(name[i] == ' '){
        initials += name[i +1]
      }
    }
    return initials.toUpperCase()
      
  
  }
