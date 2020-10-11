const express = require('express')

const app = express();

const config = require('config')
const connectDB = require('./database');

const PORT = config.get('port') || 5000;


app.use(express.json({extended: true}));

//app.use('/api/words', require('./routes/words'));

app.get('/', (req, res) => {
    res.end('<h1>Server is running</h1>')
});

async function startServer() {
    try {
        //await connectDB();
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server started on ${PORT}`)
        })
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

startServer();