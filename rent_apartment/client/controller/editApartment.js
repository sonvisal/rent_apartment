Template.editApartment.helpers({
    getPost:function(){
        return room.find({});
    }
});

Template.editApartment.events({
    "submit form": function (e,tpl){
        e.preventDefault();
        var id = this._id;
        var name = tpl.$('#apartmentname').val();
        var type = tpl.$('#type').val();
        var available_type = tpl.$('#available').val();
        var address = tpl.$('#address').val();
        var longitude = tpl.$("#longitude").val();
        var latitude = tpl.$("#latitude").val();
        var description = e.target.editor1.value;
        var image = tpl.$('#image').val();
        var img_id = Session.get('ADDIMAGEID');
        $("input").trigger("geocode");
        Meteor.call('editApartments',id, name,type,available_type,address,latitude,longitude,description,img_id);
        Router.go('/listapartment');
    }
});

Meteor.startup(() => {
    GoogleMaps.load({
      key: 'AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA',
      libraries: 'places'
    });
  });
Template.editApartment.onRendered(function () {

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

