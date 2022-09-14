function evaporator(evap_per_day, threshold){ 
    let content = 100;
    let result = 0
    let factor = 1 / 100
    evap_per_day = factor * (content - evap_per_day)
    while(content > threshold){
        content = content * evap_per_day
        result ++
    }
    return result
}




evaporator(10, 5) // 29