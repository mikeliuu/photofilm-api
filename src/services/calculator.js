const sumOrderAmount = (orders) => {
  if(Array.isArray(orders) && orders.length > 0) {
    return orders.reduce((acc, val) => acc + val);
  }

  return orders || 10;
};

module.exports = {
  sumOrderAmount
};