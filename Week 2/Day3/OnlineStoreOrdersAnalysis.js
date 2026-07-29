let orders = [
  { orderId: 101, customer: "Ali", city: "Lahore", amount: 2500, status: "delivered" },
  { orderId: 102, customer: "Sara", city: "Karachi", amount: 1200, status: "pending" },
  { orderId: 103, customer: "Ahmed", city: "Lahore", amount: 4500, status: "delivered" },
  { orderId: 104, customer: "Fatima", city: "Islamabad", amount: 800, status: "cancelled" },
  { orderId: 105, customer: "Bilal", city: "Karachi", amount: 3200, status: "delivered" },
  { orderId: 106, customer: "Hina", city: "Lahore", amount: 1500, status: "pending" },
  { orderId: 107, customer: "Usman", city: "Islamabad", amount: 6000, status: "delivered" }
];
let printOrder=orders.forEach(order=>console.log(`Order ${order.orderId} by ${order.customer}-Rs ${order.amount} ${order.status}`));

let filterOrder=orders.filter(order=>order.status==="delivered");
console.log(filterOrder);

let newObj=orders.map(order=>({orderId:order.orderId,amount:order.amount}));
console.log(newObj);

let total=orders.reduce((sum,order)=>sum+order.amount,0);
console.log("Total Amount Of Orders:", total);

let filterDeliver=orders.filter(order=>order.status==="delivered");
let totalDeliver=filterDeliver.reduce((sum,order)=>sum+order.amount,0);
console.log(`Total Amount Of Delivered Orders: ${totalDeliver}`);

let filterLahore=orders.filter(order=>order.city==="Lahore");
console.log(`Lahore Orders: ${filterLahore.length}`);

