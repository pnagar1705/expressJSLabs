const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello Express')
});
console.log(process.env.PORT)
app.listen(process.env.PORT || 3000)