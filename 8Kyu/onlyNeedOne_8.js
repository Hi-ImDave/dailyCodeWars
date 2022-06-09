// All you need to do is check whether the provided array contains the value.
// Parameters:two inputs (a, x) (a) will be an array, (x) will be a value. Both inputs can be numbers or strings
// Return: true or false depending on if (a) contains (x)
// Example: input - check([66, 101], 66) return - true
// Pseudo Code: iterate through (a) to check for presence of (x)


function check(a, x) {
  return a.includes(x)
}

check([66, 101], 66)