const { WebSocketServer }=require('ws');

///creating the server on a port
const wsss=new WebSocketServer({ port:8081 });

console.log("Websocket server started on port 8081");


wsss.on("connection",(socket)=>{
    console.log("New User Joined the Chat");

    socket.on("message",(data)=>{
        const message=data.toString();
        console.log(`Received: ${message}`);



        wsss.clients.forEach((client)=>{
    if(client.readyState===1){
        client.send(`BroadCast ${message}`)
    }
});
    });

socket.on("close",()=> console.log("User disconnected"))
});