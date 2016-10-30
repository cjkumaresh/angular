app.controller('mainCtrl', ['$scope', 'utilService', 'dataService', function ($scope, utilService, dataService) {
    $scope.init = function () {
        $scope.page = {
            header: 'views/header.html',
            footer: 'views/footer.html'
        };
    };
    $scope.init();
}]);