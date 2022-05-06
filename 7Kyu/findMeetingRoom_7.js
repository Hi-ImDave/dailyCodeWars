function meeting(x){ 
    return x.some(x => x === 'O') ? x.indexOf('O') : 'None available!'
}