const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({

    name: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: String
    },
    weekday: {
        type:String
    },
    time: {
        type: String
    }
    
})

module.exports = mongoose.model("Event", eventSchema)