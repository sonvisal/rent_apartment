Meteor.methods({
	//Update user account
  editUsers: function (id,firstname,lastname,email,img_id) {
  	var attr={
      emails:[{address:email,verified:false}],
      profile:{firstname:firstname,lastname:lastname,image:img_id},
  	}
  	return Meteor.users.update(id, {$set:attr});
  },
  //Update user role
  updateRole: function(id,attrRole){
      return Meteor.users.update(id, {$set:{roles:attrRole}});
  }
});
