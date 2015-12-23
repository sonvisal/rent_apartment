Template.manageuser.events({
    'submit form': function(event){
        //event.preventDefault();
        var firstname = $('[name=firstname]').val();
        var lastname = $('[name=lastname]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var myrole = "member";
        var image =$('#image').val();
        alert("abc1");
        var img_id = Session.get('ADDIMAGEID');
        Meteor.call('addUsers',firstname,lastname,email,password,myrole, img_id,function(err){
            if(err){
                console.log("add user error"+err.reason);
            }
        });
    },
  'change #image': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
       // alert("sess"+fileObj._id)
        Session.set('ADDIMAGEID', fileObj._id);
      });
    }
  }
});

//Show all users info
Template.manageuser.helpers({
    listRole: function (){
        return Meteor.roles.find({});
    },
    userInfo: function () {
      return Meteor.users.find({});
    },
    getrole: function(per){
        return per.mygroup[0];
    }
});

Template.manageuser.onRendered( function() {
  $( "#addUsers" ).validate({
    rules: {
      firstname: {
        required: true,
        maxlength: 7,
        minlength: 3
      },
      lastname: {
        required: true,
        maxlength: 7,
        minlength: 3
      },
      email: {
        required: true,
        email:true
      },
       password: {
        required: true,
        minlength: 8
      }
    },
    messages: {
      firstname: {
        required: "<p style='color:red;'>Please enter your first name!</p>",
        maxlength: "<p style='color:red;'>No more than 7 characters, please.</p>",
        minlength: "<p style='color:red;'>Use at least 3 characters, please.</p>"
      },
      lastname: {
        required: "<p style='color:red;'>Please enter your lastname!</p>",
        maxlength: "<p style='color:red;'>No more than 7 characters, please.</p>",
        minlength: "<p style='color:red;'>Use at least 3 characters, please.</p>"
      },
      email: {
        required: "<p style='color:red;'>Please enter your valid email!</p>",
        email: "<p style='color:red;'>Please enter your a valid email address!</p>"
      },
      password: {
        required: "<p style='color:red;'>Please enter your password!</p>",
        minlength: "<p style='color:red;'>Use at least 8 characters, please.</p>"
      }
    }
  });
});

Template.editUser.events({
"click #close":function(){
  $("#close").close();
}

});
