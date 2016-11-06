app.service('utilService', ['$location', '$window', '$routeParams', function ($location, $window, $routeParams) {
    var self = this;
    self.redirect = function (path) {
        $location.path(path);
    };
    self.open = function (path, target) {
        $window.open(path, target);
    };
    self.getUrl = function () {
        return $location.path();
    };
    self.getRuoteParams = function () {
        return $routeParams;
    };
    self.getRuoteParam = function (key) {
        return $routeParams[key];
    };
}]);