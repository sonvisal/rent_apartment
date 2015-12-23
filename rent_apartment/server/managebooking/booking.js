Meteor.methods({
	addbooking:function(roomname,currentuser,checkin,checkout){
		var attr={
			"roomname":roomname,
			"checkin":checkin,
			"checkout":checkout,
			"username":currentuser
		}
		addbooking =booking.insert(attr);
		return addbooking;
	}
});