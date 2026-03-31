const { error } = require('console');
const EventEmitter=require('events');
const myEmitter=new EventEmitter();
let orderId=0;

myEmitter.on("order-placed",(orderId)=>{
    console.log(`order id ${orderId} place confirming and sending email`);
})
myEmitter.on("error",(err,id)=>{
    console.log(`System error on order ${id} error: ${err.message}`)
})
setInterval(()=>{
    console.log("Use clicked 'Buy'... ");
 if(Math.random()< 0.2){
    myEmitter.emit("error",new Error("Payment GateWay Down"),++orderId);
 }else{
    myEmitter.emit("order-placed",++orderId);
 }
},2000);
