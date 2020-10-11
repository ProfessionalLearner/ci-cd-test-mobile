const app = require('./app');
const config = require('config')
const connectDB = require('./database');

const PORT = config.get('port') || 5000;


async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`)
        })
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

startServer();