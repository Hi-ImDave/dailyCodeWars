function palindrome(num) { 
    return typeof num !== 'number' || num < 0 ? 'Not valid' : Number(num.toString().split('').reverse().join('')) === num
  } 