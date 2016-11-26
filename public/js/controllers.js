angular.module('controllers', [])

	.controller('chatController', ['$scope','$http', '$timeout', function($scope, $http, $timeout) {
		$scope.messages = [];
		$scope.message = '';

		$timeout(function() {
			$scope.messages.push({
				bot: true,
				message: 'Boa tarde, como posso te ajudar ?',
				date: new Date()
			});
		}, 1500);

		$scope.sendMessage = function() {
			$scope.messages.push({
				bot: false,
				message: $scope.message,
				date: new Date()
			});

			$http.post('/api/chat/message', {message: $scope.message}).then(function(response) {
				var messages = response.data.result.fulfillment.messages;
				var message = null;

				if (Array.isArray(messages)) {
					message = messages[0].speech;
				} else {
					message = messages.speech;
				}

				$scope.messages.push({
					bot: true,
					message: message,
					data: response.data.result.fulfillment.data,
					date: new Date()
				});
			});

			$scope.message = '';
		};
	}]).directive('scrollToLast', ['$location', '$anchorScroll', function($location, $anchorScroll){
  
		function linkFn(scope, element, attrs){
			$location.hash(attrs.scrollToLast);
			$anchorScroll();
		}
		
		return {
			restrict: 'AE',
			scope: {
			
			},
			link: linkFn
		};
		
		}]);