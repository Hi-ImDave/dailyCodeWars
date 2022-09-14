function uniqueInOrder(iterable){
    console.log( iterable)
      let newArr = []
      if(iterable == []){
          return newArr
      }
       newArr = [iterable[0]]
      for(let i = 1; i < iterable.length; i++){
          if(iterable[i] !== iterable[i - 1]){
              newArr.push(iterable[i])
          } 
      }
      return newArr
  }