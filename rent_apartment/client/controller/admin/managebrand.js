Template.managebrand.events({
	"submit form": function(e, tpl) {
		//alert("hellllll");
		var title=tpl.$("#title").val();
		var image_id = Session.get('ADDIMAGEID');	
		var description=tpl.$("#description").val();
		Meteor.call('insertBrand',title,image_id,description,function(err){
            if(err){
                console.log(err.reason);
            }
        });		
	},
	'change #image': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          images.insert(files[i], function (err, fileObj) {
            Session.set('ADDIMAGEID', fileObj._id);
          });
        }
    }
});
//Brand validation form
Template.managebrand.onRendered( function() {
  $( "#addBrand" ).validate({
    rules: {
      title: {
        required: true,
        maxlength: 15,
        minlength: 7
      },
      description: {
        required: true,
        maxlength: 100,
        minlength: 50
      }
    },
    messages: {
      title: {
        required: "<p style='color:red;'>Please enter your brand title!</p>",
        maxlength: "<p style='color:red;'>No more than 15 characters, please.</p>",
        minlength: "<p style='color:red;'>Use at least 7 characters, please.</p>"
      },
      description: {
        required: "<p style='color:red;'>Please enter your brand description!</p>",
        maxlength: "<p style='color:red;'>No more than 100 characters, please.</p>",
        minlength: "<p style='color:red;'>Use at least 50 characters, please.</p>"
      }
    }
  });
});

Template.managebrand.helpers({
	allBrand: function(){
		return brands.find({});
	},
	getImage:function(id){
		var img = images.findOne({_id:id});
		if(img){
			console.log("img---"+img.copies.images.key);
			return img.copies.images.key;
		}else{
			return;
		}
	},
});
Template.managebrand.events({
	"click #remove": function(e, tpl) {
		var id=this._id;
		Meteor.call('deleteBrand', id);		
	} 
});
//update brand

Template.updatebrand.events({
	'click #updatebrand': function(e, tpl) {
    e.preventDefault();
		var id=this._id;
		var title=tpl.$("#title").val();
		var oldimage=tpl.$("#oldimage").val();
		var image = Session.get('ADDIMAGEID');	
		var description=tpl.$("#description").val();
		//alert('hi Lida'+title+image+description+oldimage);
		if(typeof image == 'undefined'){
			image=oldimage;
		}

		var attr={
			title:title,
			image:image,
			description:description
		};
	  	
		Meteor.call('updateBrand',id,attr);
		Router.go("managebrand");
	},
	'change #image': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          images.insert(files[i], function (err, fileObj) {
            Session.set('ADDIMAGEID', fileObj._id);
          });
        }
    }
});
//Brand update form validation
Template.updatebrand.onRendered( function() {
  $( "#editBrand" ).validate({
    rules: {
      title: {
        required: true,
        maxlength: 15,
        minlength: 7
      },
      description: {
        required: true,
        maxlength: 100,
        minlength: 50
      }
    },
    messages: {
      title: {
        required: "<p style='color:red;'>Please enter your brand title!</p>",
        maxlength: "<p style='color:red;'>No more than 15 characters, please.</p>",
        minlength: "<p style='color:red;'>Use at least 7 characters, please.</p>"
      },
      description: {
        required: "<p style='color:red;'>Please enter your brand description!</p>",
        maxlength: "<p style='color:red;'>No more than 100 characters, please.</p>",
        minlength: "<p style='color:red;'>Use at least 50 characters, please.</p>"
      }
    }
  });
});



