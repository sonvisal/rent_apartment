
// Router.route('/admin/dashboard', {
//     name: 'dashboard'
// });
Router.route('/admin/manageuser', {
    name: 'manageuser'
});
Router.route('/admin/managebrand', {
    name: 'managebrand'
});
Router.map(function () {
	this.route('/admin/dashboard', {
		name: 'dashboard',
		onBeforeAction: function (pause) {
			if (!Meteor.user()) {
				// render the login template but keep the url in the browser the same
				Session.set('dashboard',1);
				this.render('login');
			} else {
				this.next();
			}
		}
	})
});