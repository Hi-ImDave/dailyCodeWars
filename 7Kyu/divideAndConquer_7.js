function divCon(x){
    let strings =  x.filter(item => typeof item === 'string').map(str => Number(str)).reduce((a, b) => a + b, 0)
    let nums = x.filter(item => typeof item === 'number').reduce((a, b) => a + b, 0)
    return nums - strings
}