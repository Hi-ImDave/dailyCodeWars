// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Parameters: input will be a name in string format. 
// Return: the number of lightsabers owned 
// Example: input - howManyLightsabersDoYouOwn('Zach') return - 18
// Pseudo Code: ternary operator that checks input (name) against 'Zach' if true return 18 otherwise return 0


function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
}

  howManyLightsabersDoYouOwn('Zach')