Meteor.methods({
   addUsers: function (firstname,lastname,email,password,myrole,img_id){
        targetUserId=Accounts.createUser({
            email: email,
            password: password,
            profile:{firstname:firstname,lastname:lastname,image:img_id}
           });
        Roles.setUserRoles(targetUserId, [myrole], 'mygroup')
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