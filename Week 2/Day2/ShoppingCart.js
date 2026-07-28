let addTOCart=(cart,{name,price,qty=1})=>{
    let cart1=[...cart,{name,price,qty}];
    return cart1;
}
const getCartSummary=(cart)=>{
    
    
    let totalSum=0;
    for(let i=0;i<cart.length;i++){
      const {price,qty}=cart[i];
        totalSum+=price*qty;
    }
    return totalSum;
}
const logMultiplesItems=(...items)=>{
    return items;
}
let cart=[];
cart=addTOCart(cart,{name:'Mango',price:250,qty:2});
cart=addTOCart(cart,{name:'Apple',price:100});
console.log(cart);

let TotalBill=getCartSummary(cart);
console.log(`TotalBill : ${TotalBill}`);

console.log(`Items : ${logMultiplesItems("Apple","Mango","Orange")}`);