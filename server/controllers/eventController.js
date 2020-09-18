const event = require('../models/event')

exports.addEvent = async (request, response) => {
    console.log(request.body)
    const eventItem = new event({
      name: request.body.name,
      location: request.body.location,
      date: request.body.date,
      weekday: request.body.weekday,
      time: request.body.time,
   
    })
    eventItem
      .save()
      .then((eventItem) => {
        response.send(eventItem)
      })
      .catch((error) => {
        console.log(error)
      })
  }