function toUnderscore(string) {
    string = string.toString()
    return string.split(/(?=[A-Z])/).join('_').toLowerCase(); 
  }