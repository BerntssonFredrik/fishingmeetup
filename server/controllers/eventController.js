const event = require('../models/event')

exports.addEvent = async (request, response) => {
    console.log(request.body)
    const eventItem = new event({
      imgUrl: request.body.imgUrl,
      fish: request.body.fish,
      location: request.body.location,
      date: request.body.date,
      organizer: request.body.organizer,
      time: request.body.time,
      info: request.body.info,
 
   
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

  
exports.getEvents = async (request, response) => {
  try {
    const events = await event.find().exec();
    return response.json(events)
  } catch (error) {
    console.log(error)
  }
}

exports.getEvent = async (request, response) => {
    const myEvent = await event.findOne({_id: request.params.id}).exec();
    return response.json(myEvent)

}

exports.addAttendee = async(request, response) => {
  console.log(request.body)
  const attendee = {name: request.body.attendeeName, email: request.body.attendeeNr}
  await event.findOneAndUpdate(
    { _id: request.params.id }, 
    { $push: { attendees: attendee } }
  
);
response.send({success: true, id: request.params.id})
} 

exports.addComment = async(request, response) => {
  const comment = {name: request.body.commentName, comment: request.body.commentComment}
  console.log(typeof comment)
  await event.findOneAndUpdate(
    { _id: request.params.id }, 
    { $push: { comments: comment } }
  
);
response.send({success: true, id: request.params.id} )
} 
