function doubleOrNothing(cash, wager, losses){
    let spent = wager
    for(i = 1; i < losses; i++){
      spent += spent;
    }
    return cash - spent >= 0 ? cash - spent : "I'll pay you back later"
  }