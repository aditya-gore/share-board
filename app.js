const express = require('express'); // access
const socket = require('socket.io');

const app = express(); // initialized and server ready

app.use(express.static('public')); // direct express to index.html

const port = 3000;

// start listening to incoming request
const server = app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('made socket connection');

  // received data for "beginPath" event
  socket.on('beginPath', (data) => {
    // transfer data to all connected computers
    io.sockets.emit('beginPath', data);
  });

  // received data for "drawStroke" event
  socket.on('drawStroke', (data) => {
    // transfer data to all connected computers
    io.sockets.emit('drawStroke', data);
  });

  // received data for "redoUndo" event
  socket.on('redoUndo', (data) => {
    // transfer data to all connected computers
    io.sockets.emit('redoUndo', data);
  });
});
