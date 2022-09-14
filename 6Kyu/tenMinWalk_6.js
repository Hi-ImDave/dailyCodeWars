function isValidWalk(walk) {
    let nS = 0;
    let eW = 0;
    for(i = 0; i < walk.length; i++){
      switch(walk[i]){
          case 'n': nS++; break;
          case 's': nS--; break;
          case 'e': eW++; break;
          case 'w': eW--; break;
      }
    }
    return walk.length === 10 && (nS === 0 && eW === 0)
    
  }