Meteor.methods({
  addApartment: function(name,type,available_type,address,img_id){
    var apartmentInfo={
      name:name,
      type:type,
      available_type:available_type,
      address:address,
      image:img_id
    }
    return room.insert(apartmentInfo);
  }
});