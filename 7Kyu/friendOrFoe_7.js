function friend(friends){
    let newArray = []
    for(i = 0; i < friends.length; i++){
      if(friends[i].length === 4){
        newArray.push(friends[i])
      }
    }
    return newArray
  }