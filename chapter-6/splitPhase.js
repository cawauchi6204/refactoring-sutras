/*
フェーズの分離
*/

// before
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0]].split("-"[1]);
const orderPriceBefore = parseInt(orderData[1]) * productPrice;


// after
const orderRecord = parseOrder(order);
const orderPriceAfter = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);
  return ({
    productID: values[0].split("-")[1],
    quantity: parseInt(values[1]),
  });
}
function price(order, priceList) {
  return order.quantity * priceList[order.productID];
}
