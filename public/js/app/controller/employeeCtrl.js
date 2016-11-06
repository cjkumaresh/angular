app.controller('employeeCtrl', ['$scope', 'utilService', 'dataService', function ($scope, utilService, dataService) {
    $scope.init = function () {
        var id = utilService.getRuoteParam('id');
        if (id) {
            $scope.fetch(id);
        } else {
            $scope.employee = {
                name: '',
                id: '',
                email: '',
                address: '',
                gender: '',
                username: '',
                password: ''
            };
        }
    };
    $scope.fetch = function (id) {
        var params = {
            id: id,
            success: function (response) {
                $scope.employee = response;
            },
            error: function (response) {
                Materialize.toast('Request Failed!', 2000);
            }
        };
        dataService.fetch(params);
    };
    $scope.save = function () {
        var params = {
            data: $scope.employee,
            success: function (response) {
                Materialize.toast('Saved successfully!', 2000, utilService.redirect('/list'));
            },
            error: function (response) {
                Materialize.toast('Request Failed!', 2000);
            }
        };
        dataService.save(params);
    };
    $scope.cancel = function () {
        utilService.redirect('/list');
    };
    $scope.init();
}]);