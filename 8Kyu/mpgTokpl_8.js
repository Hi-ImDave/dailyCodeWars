// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// Parameters: input will be a number either as an integer or float greater than or equal to 0. 
// Return: number of kilometers per liter based on the number of miles per gallon. return will be rounded to two decimal points, or if ending in 0 rounded off without the zero.
// Example: input - converter(10) return - 3.54
// Pseudo Code: check if (mpg) is zero, if so return 0 otherwise initialize (kpl) to store result of conversion equation and return (kpl) fixed to 2 decimal points or if ending in zero, slice from kpl[0] to kpl[-1]


function converter (mpg) {
    if(mpg == 0){
        return 0
    }
    let kpl = Number(((mpg / 4.54609188) * 1.609344).toFixed(2))
    return kpl.toString().endsWith(0) ? kpl.slice(0, -1) : kpl
}

converter(10)
 