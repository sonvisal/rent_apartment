Template.managebooking.helpers({
	getroombooking:function () {
		getroombooking=booking.find({});
		return getroombooking;
	}
});

Template.roomDetail.events({
	"click #booking":function(e){
	e.preventDefault();
	var currentuser = Meteor.userId();
	var roomname=$("#apartmentname").text();
	var checkin =$("#checkin").val();
	var checkout =$("#checkout").val();
	Meteor.call("addbooking",roomname,currentuser,checkin,checkout);
	}
});