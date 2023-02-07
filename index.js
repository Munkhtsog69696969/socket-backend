const express=require("express");

const http=require("http");

const app=express();

const {Server}=require("socket.io");

const cors=require("cors")

app.use(cors());

const server=http.createServer(app);

let texts=[];

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"],
    },
})

io.on("connection" , (socket)=>{
    // console.log("User Id:",socket.id);

    socket.on("join_room",(data)=>{
        console.log(data)

        socket.join(data.room)
    })

    socket.on("send_message",(data)=>{
        console.log(data)

        texts.push(data.message)

        socket.to(data.room).emit("receive_message",texts);  
    })
})

server.listen(4000,()=>{    
    console.log("Server is running")
})


