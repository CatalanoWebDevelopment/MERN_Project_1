const mongoose = require('mongoose');
const db = process.env.MONGO_URI;
console.log("PARKER CATALANO", db)

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            userFindAndModify: false
        });
        console.log('MongoDB has connected.');
    } catch (error) {
        console.error(error.message);

        // Exit process with failure.
        process.exit(1);
    }
}

module.exports = connectDB;