function golfScoreCalculator(parList, scoreList){
    parList = parList.split('').map(str => Number(str))
    scoreList = scoreList.split('').map(str => Number(str))
    par = parList.reduce((a, b) => a + b)
    score = scoreList.reduce((a, b) => a + b)
    return score - par
}