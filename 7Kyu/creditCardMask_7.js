function maskify(cc) {
    let newCC = ''
    for( i = 0; i < cc.length; i++){
      if(i < cc.length - 4){
        newCC += '#'
      } else if(i > cc.length - 5){
        newCC += cc[i]
      }
    }
     return newCC
   }