Meteor.methods({
	insertBrand: function(title,image,description) {
		var attr={
			title:title,
			image:image,
			description:description
		};
		return brands.insert(attr);
	},
	deleteBrand: function(id) {
		brands.remove(id);
	},
	updateBrand: function(id,attr){
		return brands.update({_id:id},{$set: attr});
	},
});
