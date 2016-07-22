myApp.controller('showController', function($scope, $location, $routeParams, userFactory, pollFactory){
	console.log('fetching user', $routeParams.id1);
	userFactory.getUser($routeParams.id1, function(user){
		console.log('show controller,', user);
		$scope.user = user.data[0];
		console.log($scope.user._id);
	})
	console.log($routeParams.id2);
	var pollId = $routeParams.id2;
	pollFactory.getPoll(pollId, function(data){
		console.log('show controller,', data);
		$scope.poll = data.data[0];
	})
	$scope.vote1 = function(poll){
		console.log('show controller vote1', poll)
		pollFactory.vote1(poll._id, function(data){
			$scope.polls = data;
			$location.path('/poll/index/'+$scope.user._id);
		})
	}
	$scope.vote2 = function(poll){
		console.log('show controller vote1', poll)
		pollFactory.vote2(poll._id, function(data){
			$scope.polls = data;
			$location.path('/poll/index/'+$scope.user._id);
		})
	}
	$scope.vote3 = function(poll){
		console.log('show controller vote1', poll)
		pollFactory.vote3(poll._id, function(data){
			$scope.polls = data;
			$location.path('/poll/index/'+$scope.user._id);
		})
	}
	$scope.vote4 = function(poll){
		console.log('show controller vote1', poll)
		pollFactory.vote4(poll._id, function(data){
			$scope.polls = data;
			$location.path('/poll/index/'+$scope.user._id);
		})
	}
	// var userId = $routeParams.id;
	// userFactory.getUser(userId, function(data){
	// 	console.log('show controller,', data);
	// 	$scope.user = data.data;
	// })



	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	// console.log('I am able to load my indexController along with my index partial');

	// // d.a({name: 'req.body.test', status: 'working'}, function(d){
	// // 	console.log(d);
	// // })
	// mongooseFactory.getMongooses(function(data){
	// 	console.log('this is data in indexController get mognooses', data);
	// 	$scope.mongooses = data;
	// })

	// $scope.createMongoose = function(){
	// 	console.log('createMongoose indexController', $scope.newMongoose);
	// 	mongooseFactory.addMongoose($scope.newMongoose, function(mongooseArray){
	// 		$scope.mongooses = mongooseArray;
	// 	})
	// }
})