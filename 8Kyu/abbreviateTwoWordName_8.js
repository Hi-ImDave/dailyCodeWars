// Write a function to convert a name into initials.
// Parameters: string, two words with a space between them
// Return: first letter of each word, capitalized, with a period separating them.
// Example: input - abbrevName("John Smith") return - 'J.S'
// Pseudo Code: create a variable named initials to store the first letter and period then iterate through the string until a space is found. Concatenate initials with the element directly after the space. return initials capitalized.


function abbrevName(name){
    let initials = name[0] + '.' 
    for(i = 0; i < name.length; i++){
      if(name[i] == ' '){
        initials += name[i +1]
      }
    }
    return initials.toUpperCase()  
}

abbrevName('John Smith')
