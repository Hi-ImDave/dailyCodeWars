function interest(P,r,n) {
    const result = [Math.round((P*r) * n + P)]
    for(i = 1; i <= n; i++){
        P = (P*r) + P
    }
    result.push(Math.round(P))
    return result
}