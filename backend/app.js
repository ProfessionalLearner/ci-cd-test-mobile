const express = require('express')

const app = express();

app.use(express.json({extended: true}));

app.use('/api/words', require('./routes/words'));

app.get('/', (req, res) => {
    res.end('<h1>Server is running</h1>')
});

module.exports = app;