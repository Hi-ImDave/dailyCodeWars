function giveChange(amount) {
  let hundo = Math.floor(amount / 100);
  amount = amount - (hundo * 100);
  let fiddy = Math.floor(amount / 50);
  amount = amount - (fiddy * 50);
  let twenty = Math.floor(amount / 20);
  amount = amount - (twenty * 20);
  let ten = Math.floor(amount / 10);
  amount = amount - (ten * 10);
  let five = Math.floor(amount / 5);
  amount = amount - (five * 5)
  let one = Math.floor(amount / 1)
  return [one, five, ten, twenty, fiddy, hundo]
};