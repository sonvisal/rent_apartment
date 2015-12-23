Template.postApartment.events({
    "submit form": function (e,tpl){
        e.preventDefault();
        var name = tpl.$('#apartmentname').val();
        var type = tpl.$('#type').val();
        var available_type = tpl.$('#available').val();
        var address = tpl.$('#address').val();
        var longitude = tpl.$("#longitude").val();
        var latitude = tpl.$("#latitude").val();
        var description = e.target.editor1.value;
        alert(description);
        var image = tpl.$('#image').val();
        var img_id = Session.get('ADDIMAGEID');
        $("input").trigger("geocode");
        Meteor.call('addApartment',name,type,available_type,address,latitude,longitude,description,img_id);
    },
    'change #image': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
       // alert("sess"+fileObj._id)
        Session.set('ADDIMAGEID', fileObj._id);
       /* Meteor._reload.onMigrate(function() {
        return [false];
    });*/
      });
    }
}

});

Meteor.startup(() => {
    GoogleMaps.load({
      key: 'AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA',
      libraries: 'places'
    });
  });
Template.postApartment.onRendered(function () {

    this.autorun(() => {
      // Wait for API to be loaded
      if (GoogleMaps.loaded()) {
        // Example 3 - Autocomplete + map + form
        $('#address').geocomplete({
          map: "#map",
          details: "form"
        });

      }
    });
  });




