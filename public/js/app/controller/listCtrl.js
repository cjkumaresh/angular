app.controller('listCtrl', ['$scope', 'utilService', 'dataService', function ($scope, utilService, dataService) {
    $scope.init = function () {
        $scope.fetch();
    };
    $scope.fetch = function () {
        $scope.employees = [];
        var params = {
            success: function (response) {
                $scope.employees = response;
            }
        };
        dataService.getEmployees(params);
    };
    $scope.add = function () {
        Materialize.toast('Add Functionality is in progress!', 2000);
    };
    $scope.edit = function (id) {
        Materialize.toast('Edit Functionality is in progress!', 2000);
    };
    $scope.remove = function (id) {
        var params = {
            id: id,
            success: function (response) {
                $scope.employees = response;
                Materialize.toast('Deleted successfully!', 2000);
            }
        };
        dataService.removeEmployee(params);
    };
    $scope.init();
}]);