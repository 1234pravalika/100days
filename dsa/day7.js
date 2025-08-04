function insertOrder(orders, newOrder) {
  let index = 0;

  // find correct index
  while (index < orders.length && orders[index].deliveryTime < newOrder.deliveryTime) {
    index++;
  }

  orders.splice(index, 0, newOrder);
  return orders;
}

const orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
];
const newOrder ={ orderId: 3, deliveryTime: "12:15" };

console.log(insertOrder(orders, newOrder));

