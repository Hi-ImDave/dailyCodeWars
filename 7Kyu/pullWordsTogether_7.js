function sentencify(words) {
    let str=words.join(' ');
    return str.charAt(0).toUpperCase() + str.substr(1) +'.';
  }