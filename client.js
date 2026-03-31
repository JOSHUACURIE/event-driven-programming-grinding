const WebSocket=require('ws');
const readline=require('readline');
const { text } = require('stream/consumers');
const { join } = require('path');
const prompt = require('prompt-sync')({sigint: true});

const ws=new WebSocket('ws://localhost:8081');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const userName=prompt('Enter your name: ');
ws.on("open",()=>{
    
    console.log("Connected to the server.Type message and hit Enter");

    rl.on("line",(input)=>{
       const payload=JSON.stringify({
        user:userName,
        text:input
       });
       ws.send(payload);
    });
});


//listen for broadcast events from the server

ws.on("message",(rawBuffer)=>{
    const data=JSON.parse(rawBuffer.toString());
    console.log(`${data.user}: ${data.text}`);
});