angular.module('controllers', [])

	.controller('chatController', ['$scope','$http', function($scope, $http) {
		$scope.messages = [];
		$scope.message = '';

		$scope.sendMessage = function() {
			$scope.messages.push($scope.message);
			$http.post('/api/chat/message', {message: $scope.message}).then(function(response) {
				var messages = response.data.result.fulfillment.messages;

				if (Array.isArray(messages)) {
					$scope.messages.push(messages[0].speech);
				} else {
					$scope.messages.push(messages.speech);
				}		
			});
		};
	}]);