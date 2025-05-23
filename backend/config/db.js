const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connection Successful");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB