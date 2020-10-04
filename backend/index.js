const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose');
const { start } = require('repl');

const app = express();

app.use(express.json({extended: true}));

const PORT = config.get('port') || 5000;

async function startServer() {
    try {
        await mongoose.connect(config.get('databaseURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`)
        })
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

startServer();