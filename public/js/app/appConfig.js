app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/list', {
		templateUrl: 'views/list.html',
		controller: 'listCtrl'
	})
	.otherwise({
		redirectTo: '/list'
	});
}]);