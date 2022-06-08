// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Parameters: an array of booleans will be given as input
// Return: total number of true(sheep) in the array
// Example: input - [true, true, false, true] return - 3
// Pseudo Code: initialize a variable to store count in, then iterate through arrayOfSheep and add 1 to result for each True. return result


function countSheeps(arrayOfSheep) {
    let num = 0;
    for(i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        num += 1
      }
    }
    return num
  }

countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true])  