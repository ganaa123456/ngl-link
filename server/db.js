
const mongoose = require("mongoose");

const connectDB = async () => {

    const conn = await mongoose.connect(
        "mongodb+srv://ganaa0110:Tozzy9933@project.5stxydr.mongodb.net/ngl", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log("mongodb holbogdloo");
    
}
module.exports = connectDB;