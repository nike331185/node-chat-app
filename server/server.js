const path = require('path');
const express =  require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;


var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('new user connect');

    socket.emit('newMessage',{
        from: '123@example.com',
        text:'123',
        createAt:123
    });
 
    socket.on('createMessage', (message) => {
        console.log('createMessage',message);
    });

    socket.on('disconnect',function(){
        console.log('User was disconnected');
    });
});


server.listen(port, function() {
    console.log('Server is up on port '+port);
});