Meteor.methods({
	addbooking:function(roomname,currentuser,checkin,checkout){
		var attr={
			"roomname":roomname,
			"checkin":checkin,
			"checkout":checkout,
			"username":currentuser,
			"status":0
		}
		addbooking =booking.insert(attr);
		return addbooking;
	},
	updatestatus:function(id,status) {
		return booking.update({_id:id}, {
        $set: {status:status}
      });
	},
	rejectstatus:function(id,status) {
		return booking.update({_id:id}, {
        $set: {status:status}
      });
	}
});