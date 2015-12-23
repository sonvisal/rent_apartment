Template.listApartment.helpers({
    getPost:function(){
        return room.find({});
    }
});
Template.listApartment.events({
	"click #delectapartment":function(){
		var id=this._id;
		Meteor.call("delectapartment",id);
	}


});
