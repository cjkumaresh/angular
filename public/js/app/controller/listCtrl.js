app.controller('listCtrl', ['$scope', 'utilService', 'dataService', function ($scope, utilService, dataService) {
    $scope.init = function () {
        $scope.fetchAll();
    };
    $scope.fetchAll = function () {
        $scope.employees = [];
        var params = {
            success: function (response) {
                $scope.employees = response;
            },
            error: function (response) {
                Materialize.toast('Request Failed!', 2000);
            }
        };
        dataService.fetchAll(params);
    };
    $scope.add = function () {
        utilService.redirect('/employee');
    };
    $scope.edit = function (id) {
        utilService.redirect('/employee/' + id);
    };
    $scope.remove = function (id) {
        var params = {
            id: id,
            success: function (response) {
                $scope.employees = response;
                Materialize.toast('Deleted successfully!', 2000);
            },
            error: function (response) {
                Materialize.toast('Request Failed!', 2000);
            }
        };
        dataService.remove(params);
    };
    $scope.init();
}]);