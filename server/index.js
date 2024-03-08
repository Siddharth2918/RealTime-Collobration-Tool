import express from "express";
import { createServer } from "http";
import {Server} from "socket.io";

const app = express();
const server = createServer(app);
const socketio = new Server(server);

app.get("/", (req, res)=>{
    res.send("Hello world")
})

socketio.on("connection", (socket)=>{
    console.log("User Connected");
})


server.listen(3000, ()=>{
    console.log("App listening on localhost:3000");
});