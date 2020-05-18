const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongo = require('mongodb').MongoClient

app.use(express.static(__dirname + '/dist/sezzle-calculator-app'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/sezzle-calculator-app/index.html'));
});

// mongo
const mongoUrl = 'mongodb://usera:rwezwqazcn2@ds151614.mlab.com:51614/sezzle-calculator-db';
mongo.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    console.log('Connected to Mongo');
  if (err) {
    console.error(err)
    return
  }
  const db = client.db('sezzle-calculator-db');
    const collection = db.collection('calculations');
    // collection.insertOne({username: 'usera', calculation: '6*7=42'}, (err, result) => {
    //     console.log('INSERTED', result);
    // })
    collection.find().toArray((err, items) => {
        console.log('all calculations: ', items);
    })
})

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
