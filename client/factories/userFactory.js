myApp.factory('userFactory', function($http){



	var factory = {};

	var userlist = [];

	factory.addUser = function(data, callback){
		console.log('made it to my user factory');
		$http.post('/user', data).then(function(data){
			console.log('made it back from backend this is our new user', data);
			userlist.push(data.data);
			callback(userlist);
		})
	}
	factory.getUsers = function(callback){
		console.log('made it to user factory get users');
		$http.get('/user').then(function(users){
			console.log('made it back from backend this all users', users);
			userlist = users.data;
			callback(userlist);
		})
	}

	factory.getUser = function(userId, callback){
		console.log("factory get user", userId)
		$http.get('/user/' + userId).then(function(user){
			console.log('made it back from backend this one user', user);
			callback(user);
		})
	}
	factory.updateUser = function(updatedUser, callback){
		$http.post('/user/' + updatedUser._id + '/update', updatedUser).then(function(data){
			console.log('made it back from backend this one user', data.data);
			callback(data.data);
		})
	}
	factory.deleteUser = function(id, callback){
		console.log(id)
		$http.post('/user/' + id + '/delete').then(function(data){
			console.log('made it back from backend this one user', data.data);
			callback(data.data);
		})
	}
	// This is my dummyFactory. I usually add this into any project that 
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well 
	// as how we would create a get request. 


	// var dummies = []

	// var factory = {}

	// factory.getDummies = function(callback){
	// 	$http.get('/dummies').then(function(data){
	// 		mongooses = data.data;
	// 		callback(data.data);
	// 	});
	// }

	// // the info parameter below is the the dummy that we're trying to add into our database

	// // I added a test for myself below. I'm passing both a body element as well a params element
	// // I use this as an initial test that I can pass information to my backend.
	// // Check out your server console and you should see the body and the value we pass through 
	// // the url. 
	// factory.addDummy = function(info, callback){
	// 	$http.post('/dummies/youShouldSeeThisInServerConsoleReqParams', info).then(function(data){
	// 		if(data.error){
	// 			callback(data);
	// 		} else {
	// 			mongooses.push(data)
	// 			callback(mongooses);
	// 		}
	// 	})
	// }

	return factory;
})