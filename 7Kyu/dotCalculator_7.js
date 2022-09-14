function dotCalculator (equation) {
    let res = 0
    equation = equation.split(' ');
    let lOper = equation[0].length;
    let rOper = equation[2].length;
    const operand = equation[1]
    switch(operand){
        case '+': res = lOper + rOper; break;
        case '-': res = lOper - rOper; break;
        case '*': res = lOper * rOper; break;
        case '//': res = lOper / rOper; break;
    }
    return '.'.repeat(res)
}