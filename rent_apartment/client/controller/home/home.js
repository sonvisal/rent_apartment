Template.home.helpers({
	myroom: function(){
		hello = room.find({});
		return hello;
	},
	getImage: function(id){
	 var img = images.findOne({_id:id});
	 if(img){
		console.log(img.copies.images.key);
		return img.copies.images.key;
	 }else{
		return;
	 }
	 console.log(img);
 }
});
Template.home.events({

});
