// Can you find the needle in the haystack?
// Parameters: input (haystack) will be an array containing various words, one of which will be 'needle'
// Return: a string that says 'found the needle at position X' with x being the index of 'needle'
// Example: input - findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]) return - "found the needle at position 5"
// Pseudo Code: iterate through haystack and return string concatenated with indexOf 'needle'


function findNeedle(haystack) {
    for(i = 0; i < haystack.length; i++){
        return 'found the needle at position ' + haystack.indexOf('needle');    
    }
  }

  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])