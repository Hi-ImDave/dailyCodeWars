function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('')
    .filter(letter => vowels.indexOf(letter.toLowerCase()) == -1)
    .join('');
  }

