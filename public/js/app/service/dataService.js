app.service('dataService', ['$http', '$q', function ($http, $q) {
	var self = this;
	self.getEmployees = function (params) {
		$http.get('/employees').success(function (response) {
			params.success(response);
		});
	};
	self.getEmployee = function (params) {
		$http.get('/employee/' + params.id).success(function (response) {
			params.success(response);
		});
	};
	self.removeEmployee = function (params) {
		$http.delete('/employee/' + params.id).success(function (response) {
			params.success(response);
		});
	};
}]);