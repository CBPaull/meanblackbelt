myApp.controller('newController', function($scope, $location, userFactory){

	$scope.createUser = function(){
		console.log('createUser newController', $scope.newUser);
		userFactory.addUser($scope.newUser, function(userArray){
			$scope.user = userArray[0];
			console.log($scope.user._id);
			$location.path('/poll/index/'+$scope.user._id);
		})
	}
})