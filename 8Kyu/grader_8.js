// Create a function that takes a number as an argument and returns a grade based on that number.
// Parameters: input will be an number greater than 0. can be a float
// Return: letter grade that corresponds to score. 
// Example: input - grader(1.1) return - 'F'
// Pseudo Code: check if score is greater than 1 or less than 0.6 and return corresponding letter if true, otherwise continue the same pattern until a true result is found otherwise return null


function grader(score) {
    return score > 1 || score < 0.6 
    ? 'F' : score >= 0.9 ? 'A' 
     : score >= 0.8 
    ? 'B' 
     : score >= 0.7 
    ? 'C' 
     : score >= 0.6 
    ? 'D' 
     : null
}

grader(1.1)


// Additional Parameters: 

// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater 	"D"