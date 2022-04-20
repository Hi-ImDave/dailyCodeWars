function solution(str) {
    const arr = [];
    for (let index = 0; index < str.length; index += 2) {
      arr.push(str.slice(index, index + 2));
    }
  
    return arr.map(sub => sub.length < 2 ? sub += '_' : sub) ;
  }