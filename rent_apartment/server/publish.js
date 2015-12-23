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
Meteor.publish('booking', function (){ 
  return booking.find({})
});




