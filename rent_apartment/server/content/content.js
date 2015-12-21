Meteor.methods({

	addcontent:function(attr){
        return content.insert(attr);
    }
});
