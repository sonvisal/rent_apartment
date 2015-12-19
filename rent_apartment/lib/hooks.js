var IR_BeforeHooks = {
   
    checkLogin: function(pause) {
		var admin_url = Router.current().url
		var result = admin_url.split('/')[1];
		if( result == 'Admin'){
			
			if (!( Meteor.loggingIn() || Meteor.user() )) {
				this.render('login');
			
			}else{
				if( !Roles.userIsInRole(Meteor.userId(), ['Admin User','Admin'],'mygroup')){
					this.render('home');
				}else{
					this.next();
				}
			}
		}
		else if (!( Meteor.loggingIn() || Meteor.user() )) {
				this.render('login');
			
		}else{
			this.next();
		}
    }
	
}
if( Meteor.isClient){
Router.onBeforeAction(IR_BeforeHooks.checkLogin, {
	//only: ['admin']
	except: ['login']
});
}

//After Hooks 
var IR_AfterHooks = {
    checkFooter: function() {
		var admin_url = Router.current().url
		var result = admin_url.split('/')[1];
		if( result == 'Admin'){
			 $('.footer').css('display', 'none')
			 $('#menu').css('display', 'none')
			
		}else{
			this.next();
		}
    }
    
}
if( Meteor.isClient){
	Router.onAfterAction(IR_AfterHooks.checkFooter);
}