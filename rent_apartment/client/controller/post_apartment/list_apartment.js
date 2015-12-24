Session.set('ADDIMAGEID','');
Template.listApartment.helpers({
    getPost:function(){
        return room.find({});
    }
});
Template.listApartment.events({
	"click #delectapartment":function(){
		var id=this._id;
		Meteor.call("delectapartment",id);
	},
	"click #updateApartment" :function(e){
		e.preventDefault();
		var id = this._id;
        var name = tpl.$('#apartmentname').val();
        var type = tpl.$('#type').val();
        var available_type = tpl.$('#available').val();
        var address = tpl.$('#address').val();
        var longitude = tpl.$("#longitude").val();
        var latitude = tpl.$("#latitude").val();
        var description = e.target.editor1.value;
		console.log("desc"+description);
        //var image = tpl.$('#image').val();
        var img_id = Session.get('ADDIMAGEID');
		
        $("input").trigger("geocode");
		var attr={
			  name:name,
			  type:type,
			  location:address,
			  available_type:available_type,
			  description:description,
				map : {
					latitude :latitude ,
					longitude :longitude
				},
				// locationstart:longitude,
			  // locationend:latitude,
			  image:img_id

		  }
		room.update({_id:id},{$set: attr});
        Router.go("/admin/listapartment");
	},
	'change #image': function(event, template) {
		var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
			images.insert(files[i], function (err, fileObj) {
			 //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
			Session.set('ADDIMAGEID', fileObj._id);
			});
		//console.log(files[i]);
		}
	  console.log('img uploaded!');
	}
});
