var mongoose = require('mongoose');
var userDb = mongoose.model('Userdb');

module.exports = (function() {
	return {
		getUsers: function(req, res){
			userDb.find({}, function(err, users){
				if(err){
					console.log(err);
					console.log('getusers function users controller');
				} else {
					res.json(users);
				}
			})
		},
		createUser: function(req, res){
			user = new userDb(req.body);
			user.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new user');
				} else {
					console.log('this is our new user',result);
					res.json(result);

				}
			})
		},
		getUser: function(req, res){
			// this should probably be findOne isntead of find
			userDb.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh user you are looking for", result);
				} else {
					console.log('this is our user',result);
					res.json(result);
				}
			})
		},
		updateUser: function(req, res){
			userDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find user', err);
				} else {
					result.firstname = req.body.firstname;
					result.lastname = req.body.lastname;
					result.birthday = req.body.birthday;
					result.save(function(err, result){
						if(err){
							console.log('couldnt save update user', err);
						} else {
							console.log('found user ', result);
							res.json(result);
						}
					})
				}
			})
		},
		deleteUser: function(req, res){
			userDb.remove({_id: req.params.id}, function(err) {
				if(err){
					console.log('coudlnt find user', err);
				}
				else{
					userDb.find({}, function(err, users){
						if(err){
							console.log(err);
							console.log('getusers function users controller');
						} else {
							res.json(users);
						}
					})
				}
			})
		}
	}
})();