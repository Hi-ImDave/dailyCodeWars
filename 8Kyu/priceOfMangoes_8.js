// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Parameters: two inputs (quantity) will be number of mangoes and (price) will be price per mango. will always be non-negative integer
// Return: total cost of mangoes
// Example: input - mango(9, 5) return - 30
// Pseudo Code: divide quantity by 3, truncate result to get number of free mangoes. subtract free mangoes from quantity to get number of mangoes being paid for, then multiply by price to get total cost of mangoes


function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }

  mango(9, 5)