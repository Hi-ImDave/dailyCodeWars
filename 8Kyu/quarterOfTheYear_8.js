// Quarter of the Year
// Parameters: one imput (month) will be an integer between 1 and 12 (inclusive)
// Return: the appropriate quarter of the year that the month falls in, as an integer
// Example: input quarterOf(12) - return - 4
// Pseudo Code: first check if month is less than or equal to 3, if true return 2. check if month is between 3 and 6, return 2 if true, check if month is between 6 and 9, return 3 if true. if everything has returned false, return 4


const quarterOf = (month) => {
    if(month <= 3){
      return 1
    } else if(month > 3 && month <= 6){
      return 2
    } else if( month > 6 && month <= 9){
      return 3
    }
    return 4
  }

  quarterOf(12)