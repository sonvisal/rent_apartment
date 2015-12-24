Meteor.methods({
  editApartments: function (id, name,type,available_type,address,latitude,longitude,description,img_id) {
  	var attr={
      name:name,
      type:type,
      available_type:available_type,
      description:description,
      location:address,
      map:{latitude:latitude,longitude:longitude},
      image:img_id
    }
  	return room.update(id, {$set:attr});
  }
});