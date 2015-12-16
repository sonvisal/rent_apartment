
Session.set("img_con","");
Session.set("error_message","");
Template.content.helpers({
  baseUrl: function(){
     return Session.get('baseurl');
   },
   getImage: function(id){
    var img = images.findOne({_id:id});
    if(img){
     console.log(img.copies.images.key);
     return img.copies.images.key;
    }else{
     return;
    }
  },
  postError:function(){
   var msg = Session.get("error_message");
   if( msg ) return true;
   else return false;
  },
  postErrormsg: function(){
   return Session.get("error_message");
 },
 exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(11.5500, 104.9167),
        zoom: 14
      };
    }
  }
});

Template.content.events({
  "click #postcontent": function(event, template){
    var title = $("#title").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var price = $("#price").val();
    var locationstart = $("#locationstart").val();
    var locationend = $("#locationend").val();
    var datetime = $("#datetime").val();
    var message = $("#message").val();
    var img = Session.get("img_con");
    var error_message = "";
	console.log(title,email,phone,price,locationstart,locationend,datetime,message,img);
    if( title == "" || email =="" || phone =="" || phone =="" || price =="" || locationstart =="" || locationend ==""){
      if (title =="")
        error_message +="title is required";
      if (email =="")
          error_message +="email is required";
      if (phone =="")
          error_message +="phone is required";
      if (locationstart =="")
          error_message +="locationstart is required";
      if (locationend =="")
          error_message +="locationend is required";
      if (datetime =="")
          error_message +="datetime is required";
      if (message =="")
          error_message +="message is required";

      return Session.set("error_message",error_message);
    }else{
      Session.set("error_message","");
      delete Session.keys['error_message'];
      var attr={
          title:title,
          email:email,
          phone:phone,
          price:price,
          locationstart:locationstart,
          locationend:locationend,
          datetime:datetime,
          message:message,
          images:img

      }
      Meteor.call("addcontent",attr);
	  Router.go('/contentlist');
    }
  },
  'change #image': function(event, template) {
    var files = event.target.files;
  for (var i = 0, ln = files.length; i < ln; i++) {
    images.insert(files[i], function (err, fileObj) {
     //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    Session.set('img_con', fileObj._id);
   });
   //console.log(files[i]);
  }
  //console.log('img uploaded!');
 }

});
Template.content.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});
Meteor.startup(function() {
    GoogleMaps.load();
  });
  Template.content.onRendered(function() {
    GoogleMaps.load();
  });
  Template.content.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });
