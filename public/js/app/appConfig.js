app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/list', {
			templateUrl: 'views/list.html',
			controller: 'listCtrl'
		})
		.when('/employee', {
			templateUrl: 'views/employee.html',
			controller: 'employeeCtrl'
		})
		.when('/employee/:id', {
			templateUrl: 'views/employee.html',
			controller: 'employeeCtrl'
		})
		.otherwise({
			redirectTo: '/list'
		});
}]);