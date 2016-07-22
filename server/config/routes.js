var users = require('./../controllers/users.js');
var polls = require('./../controllers/polls.js');

module.exports = function(app){
	// app.post('/dummies/:test', function(req, res){
		
	// 	// I'm testing the info that I'm getting from my dummy Factory
	// 	// I console.log the body and the params just to make sure that it's
	// 	// going through 

	// 	console.log(req.body);
	// 	console.log(req.params.test)
	// 	// mongooseController.getMongooses(req, res);
	// })

	app.post('/user', function(req, res){
		console.log('made it to my /user route');
		users.createUser(req, res);
	})
	app.post('/poll', function(req, res){
		console.log('made it to my /poll route');
		polls.addPoll(req, res);
	})
	app.get('/poll', function(req, res){
		console.log(' made it to my /poll get route');
		polls.getPolls(req, res);
	})
	app.post('/poll/:id/voteone', function(req, res){
		console.log('made it to my /poll/:id/vote1 post route');
		polls.vote1(req, res);
	})
	app.post('/poll/:id/votetwo', function(req, res){
		console.log('made it to my /poll/:id/vote2 post route');
		polls.vote2(req, res);
	})
	app.post('/poll/:id/votethree', function(req, res){
		console.log('made it to my /poll/:id/vote3 post route');
		polls.vote3(req, res);
	})
	app.post('/poll/:id/votefour', function(req, res){
		console.log('made it to my /poll/:id/vote4 post route');
		polls.vote4(req, res);
	})
	app.post('/poll/:id/delete', function(req, res){
		console.log('made it to my /user/:id/deletepost route');
		polls.deletePoll(req, res);
	})
	app.get('/poll/:id', function(req, res){
		console.log('made it to my /poll/:id get route');
		polls.getPoll(req, res);
	})
	
	app.get('/user', function(req, res){
		console.log(' made it to my /user get route');
		users.getUsers(req, res);
	})

	app.get('/user/:id', function(req, res){
		console.log('made it to my /user/:id get route');
		users.getUser(req, res);
	})

	app.post('/user/:id/update', function(req, res){
		console.log('made it to my /user/:id/update post route');
		users.updateUser(req, res);
	})
	app.post('/user/:id/delete', function(req, res){
		console.log('made it to my /user/:id/deletepost route');
		users.deleteUser(req, res);
	})

}