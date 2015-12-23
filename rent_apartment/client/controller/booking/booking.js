Template.managebooking.helpers({
	getroombooking:function () {
		getroombooking=booking.find({});
		return getroombooking;
	},
	getuserbook:function(username){
		 getuserbook=Meteor.users.findOne({_id:username});
		 console.log(getuserbook);
		 return getuserbook;
	},
	getstaus:function(){
		status = booking.find({"status":1});
		if(status == 1){
			return true;
		}else{
			return false;
		}
	}
});

Template.managebooking.events({
	"click #accept":function(){
		var status=1;
		var id=this._id;
		alert(id);
		Meteor.call("updatestatus",id,status);
		alert("owner user room accept");
	},
	"click #reject":function () {
		var status=0;
		var id=this._id;
		alert(id);
		Meteor.call("rejectstatus",id,status);
		alert("owner user room reject");
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
	alert("can booking");
	}
});