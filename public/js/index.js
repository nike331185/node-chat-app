var socket = io();
socket.on('connect',() => {
    console.log('Connected to server');

    socket.emit('createMessage',{
        from: '123@example.com',
        text:'123',
        createAt:123
    });

});
socket.on('disconnect',() => {
    console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
    console.log('New Message',message);
});

