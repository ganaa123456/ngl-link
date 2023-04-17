const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true , "Write Message"]
    }
})

module.exports = mongoose.model("Message" , MessageSchema);