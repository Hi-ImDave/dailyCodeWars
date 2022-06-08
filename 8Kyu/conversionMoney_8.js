// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Parameters: input will be the amount of USD as an integer -- conversion rate for this problem is 6.75 CNY for every 1 USD
// Return: should be a string that states the amount of CNY fallowed by 'Chinese Yuan' All numbers should be represented as a string with 2 decimal places.
// Example: input - usdcny(15) return - '101.25 Chinese Yuan'
// Pseudo Code: return a template literal that performs the conversion equation followed by 'Chinese Yuan'


function usdcny(usd) {
    return `${(usd*6.75).toFixed(2)} Chinese Yuan`
}

usdcny(15)