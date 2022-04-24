var number=function(array){
    let num = 1
    newArray = []
    array.forEach(item => {newArray.push(num + ': '+ item); num++}  )
    return newArray
  }