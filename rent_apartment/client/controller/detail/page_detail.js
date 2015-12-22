Template.roomDetail.helpers({
	
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
Template.roomDetail.events({

});

Template.roomDetail.onRendered(function() {
   $('#checkin').datepicker(
         { 
            minDate: 0,
            beforeShow: function() {
            $(this).datepicker('option', 'maxDate', $('#checkout').val());
          }
       });
$('#checkout').datepicker(
         {
            defaultDate: "+1w",
            beforeShow: function() {
            $(this).datepicker('option', 'minDate', $('#checkin').val());
if ($('#checkin').val() === '') $(this).datepicker('option', 'minDate', 0);                             
         }
       });
});
