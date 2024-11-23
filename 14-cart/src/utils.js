export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  // iterate over the cart values, cart is a Map object
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }

  return { totalAmount, totalCost };
};
