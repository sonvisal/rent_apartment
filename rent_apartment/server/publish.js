Meteor.publish("users",function(){
	return Meteor.users.find();
});
Meteor.publish('images', function (){ 
  return images.find({})
});
Meteor.publish('content', function (){ 
  return content.find({})
});
Meteor.publish('room', function (){ 
  return room.find({})
});
<<<<<<< HEAD

=======
Meteor.publish('booking', function (){ 
  return booking.find({})
});
>>>>>>> 6a8a2b64b1c660d699b6c6cefd4b0dd576f95229




