Template.postApartment.events({
    "click #addApartment": function (e,tpl){
        e.preventDefault();
        var name = tpl.$('#name').val();
        var type = tpl.$('#type').val();
        var available_type = tpl.$('#available').val();
        var address = tpl.$('#address').val();
        var image = tpl.$('#image').val();
        var img_id = Session.get('ADDIMAGEID');
        $("input").trigger("geocode");
        Meteor.call('addApartment',name,type,available_type,address,img_id);
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

Meteor.startup(function() {
  GoogleMaps.load({
    key: 'AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA ',
    libraries: 'places'  // also accepts an array if you need more than one
  });
});

Template.postApartment.onRendered(function () {
    this.autorun(() => {
      // Wait for API to be loaded
      if (GoogleMaps.loaded()) {
        // Example 2 - Autocomplete + map
        $('#address').geocomplete({
          map: $("#map")
        });
      }
    });

  });
