const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({

    imgUrl: {
        type: String,
        required: true
    },
    fish: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    organizer: {
        type:String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Object
        }
    ],
     attendees: [
        {
            type: Object
        }
    ] 
    
    
})

module.exports = mongoose.model("Event", eventSchema)