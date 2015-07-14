angular.module('kleen.inbox', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/inbox', {
		templateUrl: "partial/inbox/inbox.html",
		controller: "InboxCtrl"
	})
	.when('/inbox/submit', {
		templateUrl: "partial/inbox/new-work-order.html",
		controller: "SubmitCtrl"
	})
	.otherwise({
		redirectTo: '/'
	});
}])
.controller('InboxCtrl', ['$scope', '$http', function($scope, $http){
	$scope.current = {};
	$scope.messages = [];

	$http.get('/partial/inbox/work-orders.json').then(function(res){
		$scope.tickets = res.data;
		var message = $scope.tickets[0];
		$scope.messages.push({
			"author": message.author,
			"message": message.message,
			"date_submitted": message.date_submitted
		});
		for (var i = 0; i < $scope.tickets[0].replies.length; i++) {
			$scope.messages.push($scope.tickets[0].replies[i]);
		}
		$scope.current = $scope.tickets[0];
	});

	$scope.ticketFocus = function (ticket) {
		$scope.messages = [];
		$scope.messages.push({
			"author": ticket.author,
			"message": ticket.message,
			"date_submitted": ticket.date_submitted
		});
		for (var i = 0; i < ticket.replies.length; i++) {
			$scope.messages.push(ticket.replies[i]);
		}
		$scope.current = ticket;
	};

}])
.controller('SubmitCtrl', ['$scope', '$http', function($scope, $http){
	$scope.submitWorkOrder = function(workOrder){
		console.log(workOrder);
	};
}]);
