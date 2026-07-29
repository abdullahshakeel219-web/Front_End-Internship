let cart = [
  { item: "Book", price: 300, qty: 2 },
  { item: "Pen", price: 20, qty: 5 },
  { item: "Bag", price: 1500, qty: 1 },
  { item: "Notebook", price: 100, qty: 3 }
];
let productTotal=cart.map(product=>product.price*product.qty);
console.log(`Product Total Price ${productTotal}`);

let greaterPrice=cart.filter(product=>product.price>100);
console.log("Products Price Greater Than 100: ",greaterPrice);

let grandTotal=cart.reduce((sum,product)=>sum+(product.price*product.qty),0);
console.log(`GrandTotal: ${grandTotal}`);