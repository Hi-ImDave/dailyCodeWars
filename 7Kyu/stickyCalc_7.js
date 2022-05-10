function stickyCalc (operation, val1, val2){
    let newVal = Number(Math.round(val1).toString() + Math.round(val2).toString())
    val2 = Number(val2)
    switch(operation){
        case '+': return Math.round(newVal + val2);
        break;
        case '-': return Math.round(newVal - val2);
        break;
        case '*': return Math.round(newVal * val2);
        break;
        case '/': return Math.round(newVal / val2);
        break;
    }
}