Template.footer.onRendered(function () {
	var admin_url = Router.current().url
	var result = admin_url.split('/')[3];
		console.log("result "+result);
		if( result == 'admin'){
			//alert("kelo");
			 $('#myfooter').css('display', 'none');
			 $('#menu').css('display', 'none')
			
		}else if(result == 'roomOwner' || result == "Booker"){
			$('#myfooter').css('display', 'inline');
			 $('#menu').css('display', 'inline')
		}
  	
});