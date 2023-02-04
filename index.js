const express=require("express");

const http=require("http");

const app=express();

const {Server}=require("socket.io");

const cors=require("cors")

app.use(cors());

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"http://localhost:40000",
        methods:["GET","HOST"],
    }
})

server.listen(40000,()=>{
    console.log("Server is running")
})

