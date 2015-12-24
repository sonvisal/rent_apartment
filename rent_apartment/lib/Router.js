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
Router.route('/postapartment',{
	name:'postApartment'
});
Router.route('/roomDetail',{
	name:'roomDetail'
});
Router.route('/listapartment',{
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
// Router.map(function () {
	// this.route('/content', {
		// name: 'content',
		// onBeforeAction: function (pause) {
			// if (!Meteor.user()) {
				// // render the login template but keep the url in the browser the same
				// Session.set('content',1);
				// this.render('login');
			// } else {
				// this.next();
			// }
		// }
	// })
// });
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
