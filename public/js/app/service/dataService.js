app.service('dataService', ['$http', '$q', function ($http, $q) {
	var self = this;
	self.fetchAll = function (params) {
		$http.get('/employees').success(function (response) {
			params.success(response);
		}).error(function (response) {
			params.error(response);
		});
	};
	self.fetch = function (params) {
		$http.get('/employee/' + params.id).success(function (response) {
			params.success(response);
		}).error(function (response) {
			params.error(response);
		});
	};
	self.save = function (params) {
		if (params.data.id) {
			$http.post('/employee/' + params.id, params.data).success(function (response) {
				params.success(response);
			}).error(function (response) {
				params.error(response);
			});
		} else {
			$http.post('/employee', params.data).success(function (response) {
				params.success(response);
			}).error(function (response) {
				params.error(response);
			});
		}
	};
	self.remove = function (params) {
		$http.delete('/employee/' + params.id).success(function (response) {
			params.success(response);
		}).error(function (response) {
			params.error(response);
		});
	};
}]);