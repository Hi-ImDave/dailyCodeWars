// Finish the uefaEuro2016() function so it return string just like in the example below
// Parameters: two inputs (teams) which will be an array of two teams playing in a match and (scores) which will be an array of the teams respective score totals
// Return: the appropriate string to declare the victor of the match
// Example: input - uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) return - "At match Germany - Ukraine, Germany won!"
// Pseudo Code: check if scores[0] and scores[1] are equal, if so return draw statement. otherwise check if scores[0] is greater than scores[1] if so return teams[0] winner statement otherwise return teams[1] winner statement


function uefaEuro2016(teams, scores){
    return scores[0] === scores[1] 
    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.` 
     : scores[0] > scores[1] 
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
     : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
}

uefaEuro2016(['Germany', 'Ukraine'],[2, 0])
