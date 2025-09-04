import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("disconnect",()=>{
    console.log(" disconnected");
  })
  socket.on("message",(data)=>{
    console.log("message received");
    console.log(data);
  })
});

httpServer.listen(5000, () => {
  console.log('Server is running on port 5000');
});