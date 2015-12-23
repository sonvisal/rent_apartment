Meteor.methods({
  addApartment: function(name,type,available_type,address,latitude,longitude,description,img_id){
    var apartmentInfo={
      name:name,
      type:type,
      available_type:available_type,
      description:description,
      location:address,
      map:{latitude:latitude,longitude:longitude},
      image:img_id
    }
    return room.insert(apartmentInfo);
  }
});