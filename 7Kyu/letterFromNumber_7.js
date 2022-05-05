function convert(number) { 
    let res = [];
    number = number.split('')
    for(let i = 0; i < number.length; i+= 2){ 
        res.push(number.slice(i,i + 2)); 
    } 
    res = res.map(a => a.join(''))
    return res.map(a => String.fromCharCode(a)).join('')
}