const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const app = express();

var db = mongo.connect('mongodb://any-user:p7dTfbEfq0y4IeY5ZM7r@ds151614.mlab.com:51614/sezzle-calculator-db', function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
    }
})

app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({entended: true}));

app.use(express.static(__dirname + '/dist/sezzle-calculator-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/sezzle-calculator-app/index.html'));
});

app.listen(process.env.PORT || 8080);