const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");


const app=express();
const port=4500 || process.env.PORT;
const server=http.createServer(app);

const io =socketIO(server);



server.listen(port,()=>{
    console.log(`server is working on ${port}`);
})