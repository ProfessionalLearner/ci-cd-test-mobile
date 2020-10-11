const config = require('config');
const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(config.get('databaseURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;