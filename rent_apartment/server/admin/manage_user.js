Meteor.methods({
   addUsers: function (firstname,lastname,email,password,myrole,img_id){
        targetUserId=Accounts.createUser({
            email: email,
            password: password,
            profile:{firstname:firstname,lastname:lastname,image:img_id}
           });
        Roles.setUserRoles(targetUserId, [myrole], 'mygroup')
  },
  delectUser:function(id){
    return Meteor.users.remove({_id:id});
  }

});

//Upload image to manage user
images.allow({
	insert: function(userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return doc.creatorId == userId
    },
    download: function (userId, doc) {
        return doc.creatorId == userId
    }

});