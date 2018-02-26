const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.post('/', function(req, res) {
	res.send("Routed from post");
});

app.put('/putReq', function(req, res) {
	res.send('Routed from a put with the route /putReq');
});

app.delete('/deleteReq', function(rea, res) {
	res.send("Routed from a delete with the route /deleteReq");
});

app.listen(2000)