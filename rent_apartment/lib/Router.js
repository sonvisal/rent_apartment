Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: "notFound"
});
Router.route('/register',{
	name:'register'
});
Router.route('/login',{
	name:'login'
});
Router.route('/',{
	name:'home'
});
Router.route('/search_room',{
	name:'searchroom'
});
// Router.route('admin/postapartment',{
// 	name:'postApartment'
// });
Router.route('admin/managebooking',{
	name:'managebooking'
});
Router.route('/roomDetail/:_id',{
	name:'roomDetail',
	data: function(){
		return room.findOne({_id:this.params._id});
	}
});
Router.route('/contact',{
	name:'contact'
});
Router.route('/popular',{
	name:'popular'
});
Router.route('/profile',{
	name:'profile'
});
Router.route('/admin/listapartment',{
	name:'listApartment'
});
Router.route('/editApartment/:_id',{
	name:"editApartment",
	data: function(){
		return room.findOne({_id:this.params._id});
	}
});
Router.route('admin/editUser/:_id',{
	name:"editUser",
	data: function(){
		return users.findOne({_id:this.params._id});
	}

});
// Router.route('/page_detail/:_id',{
	// name:'pagedetail',
	// data: function(){
		// return content.findOne({_id:this.params._id});
	// }
// });
// Router.route('/contentlist',{
	// name:'contentlist'
// });
Router.map(function () {
	this.route('/admin/postApartment', {
		name: 'postApartment',
		onBeforeAction: function (pause) {
			if (!Meteor.user()) {
				// render the login template but keep the url in the browser the same
				Session.set('postApartment',1);
				this.render('login');
			} else {
				this.next();
			}
		}
	})
});
// Router.map(function () {
	// this.route('/profile', {
		// name: 'profile',
		// data:function(){
			// var da = users.findOne({'profile.username': this.params.username});
			// console.log(this.params.username);
			// console.log(da);
			// return da;
		// },
		// onBeforeAction: function (pause) {
			// if (!Meteor.user()) {
				// // render the login template but keep the url in the browser the same
				// Session.set('profile',2);
				// this.render('login');
			// } else {
				// this.next();
			// }
		// }
	// })
// });
