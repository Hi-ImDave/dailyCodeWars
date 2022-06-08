//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :) 
// Parameters: input (n) will be a non-negative integer. 
// Return: appropriate string dependent on (n) number of rotations
// Example: input - hoopCount(10) return - 'Great, now move on to tricks'
// Pseudo Code: can use a ternary operator to return appropriate string depending on if n is greater than or equal to 10


function hoopCount (n) {
    return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'  
 }

 hoopCount(10)