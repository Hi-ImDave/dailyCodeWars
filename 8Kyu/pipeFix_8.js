function pipeFix(numbers){
    let res = []
    for( let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
        res.push(i)
    }
    return res
}