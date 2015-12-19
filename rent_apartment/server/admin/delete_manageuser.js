Meteor.methods({
deleteuser: function(id){
	return Meteor.users.remove(id);
}
});