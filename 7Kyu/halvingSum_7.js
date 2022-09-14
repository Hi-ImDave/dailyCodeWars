function halvingSum(n) {
    let res = 0
    while(n > 0){
        res += n;
        n = Math.floor(n / 2)
    }
    return res
}
