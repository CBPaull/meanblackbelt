myApp.controller('indexController', function($scope,  $routeParams, userFactory, pollFactory){

	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my indexController along with my index partial');

	// d.a({name: 'req.body.test', status: 'working'}, function(d){
	// 	console.log(d);
	// })
	var userId = $routeParams.id;
	console.log('fetching user', $routeParams.id);
	userFactory.getUser($routeParams.id, function(user){
		console.log('show controller,', user);
		$scope.user = user.data[0];
		console.log($scope.user._id);
	})
	pollFactory.getPolls(function(data){
		console.log('this is data in indexController get polls', data);
		$scope.polls = data;
	})
	$scope.deletePoll = function(poll){
		console.log(poll._id);
		pollFactory.deletePoll(poll._id, function(data){
			$scope.polls = data;
		})
	}
})