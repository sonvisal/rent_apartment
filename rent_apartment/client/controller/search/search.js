Session.set('keyword', "");
Template.nav.events({
	'click .search-btn': function(e){
		e.preventDefault();
		var key = $(".input-search").val();
		Session.set('keyword', key);
		console.log(key);
		Router.go('/search_room');

	}

});


Template.searchroom.helpers({
	search_result: function(){
		var keyword = Session.get('keyword');
		var result = 0;
		if( keyword != "" ){
			result =room.find({name: {$regex: new RegExp(keyword, "i")}});
			return result;
		}
		else if( keyword ==""){
			alert("Please input key that you want to search!");
			Router.go('/');

		}
		else{
			return ;
		}
	},
	getImage: function(id){
	 var img = images.findOne({_id:id});
	 if(img){
		console.log(img.copies.images.key);
		return img.copies.images.key;
	 }else{
		return;
	 }
 }

});
