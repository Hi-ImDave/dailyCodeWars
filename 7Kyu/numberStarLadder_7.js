function pattern(n) {
    let s = '*', nStr = ''
    for (let i = 0; i < n; i++){
        if (i == 0){
            nStr += 1 + '\n'
        }else{
           nStr += ('1' + s.repeat(i)+ (i+1)) + "\n"
        }
    }
    return nStr.slice(0, -1)
}
