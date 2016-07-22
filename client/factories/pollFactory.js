myApp.factory('pollFactory', function($http){



	var factory = {};

	var polllist = [];

	factory.addPoll = function(data, callback){
		console.log('made it to my poll factory');
		$http.post('/poll', data).then(function(data){
			console.log('made it back from backend this is our new poll', data);
			polllist.push(data.data);
			callback(polllist);
		})
	}
	factory.getPolls = function(callback){
		console.log('made it to poll factory get polls');
		$http.get('/poll').then(function(polls){
			console.log('made it back from backend this all polls', polls);
			polllist = polls.data;
			callback(polllist);
		})
	}

	factory.getPoll = function(pollId, callback){
		$http.get('/poll/' + pollId).then(function(poll){
			console.log('made it back from backend this one poll', poll);
			callback(poll);
		})
	}
	factory.updatePoll = function(id, callback){
		$http.post('/poll/' + id + '/update', id).then(function(data){
			console.log('made it back from backend this one poll', data.data);
			callback(data.data);
		})
	}
	factory.vote1 = function(id, callback){
		console.log('poll factory vote1', id)
		$http.post('/poll/'+ id +'/voteone').then(function(data){
			console.log('made it back after voting', data.data)
			callback(data.data);
		})
	}
	factory.vote2 = function(id, callback){
		console.log('poll factory vote2', id)
		$http.post('/poll/'+ id +'/votetwo').then(function(data){
			console.log('made it back after voting', data.data)
			callback(data.data);
		})
	}

	factory.vote3 = function(id, callback){
		console.log('poll factory vote3', id)
		$http.post('/poll/'+ id +'/votethree').then(function(data){
			console.log('made it back after voting', data.data)
			callback(data.data);
		})
	}

	factory.vote4 = function(id, callback){
		console.log('poll factory vote4', id)
		$http.post('/poll/'+ id +'/votefour').then(function(data){
			console.log('made it back after voting', data.data)
			callback(data.data);
		})
	}

	factory.deletePoll = function(id, callback){
		console.log(id)
		$http.post('/poll/' + id + '/delete').then(function(data){
			console.log('made it back from backend this one poll', data.data);
			callback(data.data);
		})
	}
	return factory;
})