//moving it from simple codes to OOP now
const EventEmitter=require('events');

class PizzaShop extends EventEmitter{

constructor(inventory){
    super();
    this.orderNumber=0;
    this.inventory=inventory;
}

///the first method
placeOrder(size,topping){
    if(this.inventory<0){
        return this.emit("error",new Error("Out of stock"),size,topping)
    }
    this.orderNumber++;
    this.inventory--;
    console.log(`---New Order Number on this #${this.orderNumber}:  ${size} ${topping} pizaa---`);

this.emit("order",{
id:this.orderNumber,
size:size,
topping:topping
    });
}

completeOrder(id){
    console.log(`---Order id #${id} is out of the oven`);
    this.emit("ready",id)
}

}

const myPizzaShop=new PizzaShop(5);


myPizzaShop.on("order",(details)=>{
    console.log(`---Baker: Rolling dough for order #${details.id}...`)
setTimeout(() => {
    myPizzaShop.completeOrder(details.id);
}, 2000 );
})

myPizzaShop.on("order",(details)=>{
    console.log(`---System: Logging ${details.size} to the sales report.`)
})
myPizzaShop.on("error", (err, size, topping) => {
    console.log(`[ALERT] Failed to order ${size} ${topping}: ${err.message} ❌`);
});
myPizzaShop.on("ready",(id)=>{
    console.log(`Driver: Picking order #${id}, am on my way`);
})
const sizes=["Large","Small","Big","Wide","Thin"];
const topping=["Fish","Pizza","Fruits","HotDog","Chicked"];


const random = (arr) => arr[Math.floor(Math.random()*arr.length)];
for(let i=0;i<10;i++){
    myPizzaShop.placeOrder(random(sizes), random(topping));
}