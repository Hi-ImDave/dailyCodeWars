function encode(str,  n){
    let res = []
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const encode = Array.from(String(n),Number)
    str = str.split('').map(x=>x=alphabet.indexOf(x)+1)
    for(let i = 0; i < str.length; i++){
        res.push(str[i] + encode[i % encode.length])
    }
    return res
}


