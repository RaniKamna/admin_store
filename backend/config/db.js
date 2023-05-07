const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/CRUD';
const mongoDB = () => {
    mongoose.connect(mongoURI).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}

module.exports = mongoDB;