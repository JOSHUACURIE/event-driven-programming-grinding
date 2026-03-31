//moving it from simple codes to OOP now
const EventEmitter=require('events');

class PizzaShop extends EventEmitter{

constructor(){
    super();
    this.orderNumber=0;
}

///the first method
placeOrder(size,topping){
    this.orderNumber++;
    console.log(`---New Order Number on this #${this.orderNumber}:  ${size} ${topping} pizaa---`);

this.emit("order",{
id:this.orderNumber,
size:size,
topping:topping
    });
}

completeOrder(id){
    console.log(`---Order id #${id} is out of the oven`);
}

}

const myPizzaShop=new PizzaShop();


myPizzaShop.on("order",(details)=>{
    console.log(`---Baker: Rolling dough for order #${details.id}...`)
setTimeout(() => {
    myPizzaShop.completeOrder(details.id);
}, 2000 );
})

myPizzaShop.on("order",(details)=>{
    console.log(`---System: Logging ${details.size} to the sales report.`)
})

myPizzaShop.on("ready",(id)=>{
    console.log(`Driver: Picking order #${id}, am on my way`);
})

myPizzaShop.placeOrder("Large","Fish");