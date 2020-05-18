const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/dist/sezzle-calculator-app'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/sezzle-calculator-app/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('App listening on port 8080');
});

// socket.io
io.on('connection', function (socket) {
    console.log('A user connected');
    socket.emit('test event', 'here is some data');
    socket.on('calculation', (calc) => {
        console.log('calculation: ', calc);
    })
})

server.listen(3000, () => {
    console.log('Socket.io server is listening on port 3000');
})