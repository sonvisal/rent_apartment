Meteor.methods({
	editApartments: function(id,attr){
		check(attr,Object);
		check(id,String);
		return room.update({_id:id},{$set: attr});
	},
});