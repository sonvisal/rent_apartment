Meteor.methods({
  delectapartment:function(id){
    return room.remove({_id:id});
  }
});