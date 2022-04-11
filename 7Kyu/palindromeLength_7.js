var palindromeChainLength = function(n) {
    let count = 0 
    while(n !== Number(n.toString().split('').reverse().join(''))){
        n = Number(n) + Number(n.toString().split('').reverse().join(''))
        count++
     }
     return count
  };

