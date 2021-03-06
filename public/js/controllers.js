angular.module('controllers', [])

	.controller('chatController', ['$scope','$http', '$timeout', function($scope, $http, $timeout) {
		$scope.messages = [];
		$scope.message = '';
		$scope.sessionId = (new Date()).getTime();

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

			$http.post('/api/chat/message', {message: $scope.message, sessionId: $scope.sessionId}).then(function(response) {
				var messages = response.data.result.fulfillment.messages;
				var message = null;

				if (Array.isArray(messages)) {
					message = messages[0].speech;
				} else {
					message = messages.speech;
				}

				$timeout(function() {
					$scope.messages.push({
						bot: true,
						message: message,
						data: response.data.result.fulfillment.data,
						date: new Date()
					});

					if (response.data.result.fulfillment.data && response.data.result.fulfillment.data.messages.length > 0) {
						response.data.result.fulfillment.data.messages.forEach(function(m, i) {
							$timeout(function() {
								$scope.messages.push({
									bot: true,
									message: m.message,
									date: new Date(),
									data: m.data
								});
							}, 1500 * i);
						});
					}
				}, 1000);
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