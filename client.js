const WebSocket=require('ws');
const readline=require('readline');

const ws=new WebSocket('ws://localhost:8081');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


ws.on("open",()=>{
    console.log("Connected to the server.Type message and hit Enter");

    rl.on("line",(input)=>{
        ws.send(input);
    });
});


//listen for broadcast events from the server

ws.on("message",(data)=>{
    console.log(`New Message: ${data}`)
})