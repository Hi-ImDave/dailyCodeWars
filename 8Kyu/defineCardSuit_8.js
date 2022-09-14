function defineSuit(card) {
    switch(card[card.length - 1]){
        case '♦': return 'diamonds'; break;
        case '♠': return 'spades'; break;
        case '♥': return 'hearts'; break;
        case '♣': return 'clubs'; break;
    }
  }