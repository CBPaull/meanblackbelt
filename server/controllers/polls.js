var mongoose = require('mongoose');
var pollDb = mongoose.model('Polldb');

module.exports = (function() {
	return {
		getPolls: function(req, res){
			pollDb.find({}, function(err, polls){
				if(err){
					console.log(err);
					console.log('getpolls function polls controller');
				} else {
					res.json(polls);
				}
			})
		},
		addPoll: function(req, res){
			poll = new pollDb(req.body);
			poll.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new poll');
				} else {
					console.log('this is our new poll',result);
					res.json(result);

				}
			})
		},
		getPoll: function(req, res){
			// this should probably be findOne isntead of find
			pollDb.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh poll you are looking for", result);
				} else {
					console.log('this is our poll',result);
					res.json(result);
				}
			})
		},
		updatePoll: function(req, res){
			pollDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find poll', err);
				} else {
					result.firstname = req.body.firstname;
					result.lastname = req.body.lastname;
					result.birthday = req.body.birthday;
					result.save(function(err, result){
						if(err){
							console.log('couldnt save update poll', err);
						} else {
							console.log('found poll ', result);
							res.json(result);
						}
					})
				}
			})
		},
		vote1: function(req, res){
			pollDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find poll', err);
				} else {
					result.vc1+=1
					result.save(function(err, result){
						if(err){
							console.log('couldnt save vote', err);
						} else {
							console.log('found poll ', result);
							res.json(result);
						}
					})
				}
			})
		},
		vote2: function(req, res){
			pollDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find poll', err);
				} else {
					result.vc2+=1
					result.save(function(err, result){
						if(err){
							console.log('couldnt save vote', err);
						} else {
							console.log('found poll ', result);
							res.json(result);
						}
					})
				}
			})
		},
		vote3: function(req, res){
			pollDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find poll', err);
				} else {
					result.vc3+=1
					result.save(function(err, result){
						if(err){
							console.log('couldnt save vote', err);
						} else {
							console.log('found poll ', result);
							res.json(result);
						}
					})
				}
			})
		},
		vote4: function(req, res){
			pollDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find poll', err);
				} else {
					result.vc4+=1
					result.save(function(err, result){
						if(err){
							console.log('couldnt save vote', err);
						} else {
							console.log('found poll ', result);
							res.json(result);
						}
					})
				}
			})
		},
		deletePoll: function(req, res){
			pollDb.remove({_id: req.params.id}, function(err) {
				if(err){
					console.log('coudlnt find poll', err);
				}
				else{
					pollDb.find({}, function(err, polls){
						if(err){
							console.log(err);
							console.log('getpolls function polls controller');
						} else {
							res.json(polls);
						}
					})
				}
			})
		}
	}
})();