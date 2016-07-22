myApp.controller('editController', function($scope, $routeParams, $location, userFactory, pollFactory){
	// console.log($routeParams);
	// var userId = $routeParams.id;
	// userFactory.getUser(userId, function(data){
	// 	console.log('show controller,', data);
	// 	$scope.editUser = data.data[0];
	// });
	var userId = $routeParams.id;
	console.log('fetching user', $routeParams.id);
	userFactory.getUser($routeParams.id, function(user){
		console.log('show controller,', user);
		$scope.user = user.data[0];
		console.log($scope.user._id);
	})
	$scope.addQuestion = function(){
		pollFactory.addPoll($scope.editQuestion, function(data){
			$location.path('/poll/index/'+$scope.user._id);
		})
	}

})