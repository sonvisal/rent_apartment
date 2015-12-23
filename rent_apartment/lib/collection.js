users = Meteor.users;
room= new Mongo.Collection("room");
profile = new Mongo.Collection('profile');
content=new Mongo.Collection('content')
booking=new Mongo.Collection('booking')
if (Meteor.isServer) {
	var base_path = Meteor.npmRequire('fs').realpathSync( process.cwd() + '../../' );
	//console.log("upload_path:"+base_path);
	base_path = base_path.split('\\').join('/');
	base_path = base_path.replace(/\/\.meteor.*$/, '');
	//console.log("upload_path:"+base_path);
}
else{
	fullpath="/";
}

images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path:base_path+"/public/images"})]
});
